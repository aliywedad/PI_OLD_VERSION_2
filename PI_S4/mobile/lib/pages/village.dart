// village.dart
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import '../API.dart';

class village extends StatefulWidget {
  final int diCommit;
  final String nomCommin; // Added Wilaya Name

  const village({
    Key? key,
    required this.diCommit,
    required this.nomCommin,
  }) : super(key: key);

  @override
  State<village> createState() => _villageState();
}

class _villageState extends State<village> {
  List<Map<String, dynamic>> dataList = [];

  @override
  void initState() {
    super.initState();
    getdata();
  }

  Future<void> getdata() async {
    try {
      var url = Uri.parse(Api.village);
      var response = await http.get(url);
      if (response.statusCode == 200) {
        List<dynamic> jsonList = jsonDecode(response.body);
        setState(() {
          if (widget.diCommit > 0) {
            dataList = jsonList
                .cast<Map<String, dynamic>>()
                .where((item) => item["idCommit"] == widget.diCommit)
                .toList();
          } else {
                        dataList = jsonList.cast<Map<String, dynamic>>();
         }
        });
      } else {
        print('Error: ${response.statusCode}');
      }
    } catch (e) {
      print('Error fetching data: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.deepPurple[50],
      appBar: AppBar(
        backgroundColor: Colors.deepPurple[50],
        title: Text(widget.nomCommin != "" ? "les village de ${widget.nomCommin}" : "les village ",) 
      ),
      body: ListView.separated(
        itemCount: dataList.length,
        itemBuilder: (context, index) {
          var item = dataList[index];
          return ListTile(
            title: Container(

                child: 
                Column(
                        crossAxisAlignment: CrossAxisAlignment.start, // Align text to the left

                  children: [
                  Text('Nom du village: ${item["NomAdministratifVillage"]} \n nom local : ${item["NomLocal"]} ',),
                  Text('Date du Creation : ${item["DateCreation"]} '),
                                ],),
                padding: const EdgeInsets.symmetric(vertical: 15,horizontal: 20.0),
                decoration: BoxDecoration(
                color: Colors.white, 
                borderRadius: BorderRadius.circular(10),
                boxShadow: [
                    BoxShadow(
                      color: Colors.grey.withOpacity(0.5),
                      spreadRadius: 5, 
                      blurRadius: 7, 
                      offset: Offset(0, 3), 
                    ),
                ],  
              ),
            ),
            
          );
        },
        separatorBuilder: (context, index) => Divider(),
      ),
    
    );
  }
}
