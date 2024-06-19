// moughataa.dart
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import '../API.dart';
import './commin.dart';

class Moughataa extends StatefulWidget {
  final int idWilaya;
  final String nomWilaya; // Added Wilaya Name

  const Moughataa({
    Key? key,
    required this.idWilaya,
    required this.nomWilaya,
  }) : super(key: key);

  @override
  State<Moughataa> createState() => _MoughataaState();
}

class _MoughataaState extends State<Moughataa> {
  List<Map<String, dynamic>> dataList = [];

  @override
  void initState() {
    super.initState();
    getdata();
  }

  Future<void> getdata() async {
    try {
      var url = Uri.parse(Api.moughataa);
      var response = await http.get(url);
      if (response.statusCode == 200) {
        List<dynamic> jsonList = jsonDecode(response.body);
        setState(() {
          if (widget.idWilaya > 0) {
            dataList = jsonList
                .cast<Map<String, dynamic>>()
                .where((item) => item["ID_wilaya"] == widget.idWilaya)
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

  int _tapCount = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // backgroundColor: Colors.grey[300],
      backgroundColor: Colors.deepPurple[50],
      appBar: AppBar(
        title: Text(
          widget.nomWilaya != ""
              ? 'les Moughataa du ${widget.nomWilaya}'
              : 'les Moughataa',
          style: TextStyle(fontSize: 18),
        ),
        // backgroundColor: Colors.grey[300],
        backgroundColor: Colors.deepPurple[50],
      ),
      body: ListView.separated(
        itemCount: dataList.length,
        itemBuilder: (context, index) {
          var item = dataList[index];
          return ListTile(
            title: Container(
                child:Text(' ${item["Nom_maghataa"]}'),
                padding: const EdgeInsets.symmetric(vertical: 15,horizontal: 20),
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
            
            onTap: () {
              setState(() {
                _tapCount++;
                if (_tapCount == 2) {
                  if (item["ID_maghataa"] != null) {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => Commin(
                          idMoughataa: item["ID_maghataa"],
                          nomMouhgataa: item["Nom_maghataa"],
                        ),
                      ),
                    );
                  }
                  print('Double tap detected!');
                  _tapCount = 0; // Reset tap count after double tap
                }
              });
            },
          );
        },
        separatorBuilder: (context, index) => Divider(),
      ),
    );
  }
}
