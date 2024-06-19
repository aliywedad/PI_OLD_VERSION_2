// Commin.dart
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:mobile/pages/village.dart';
import '../API.dart';

class Commin extends StatefulWidget {
  final int idMoughataa;
  final String nomMouhgataa; // Added Wilaya Name

  const Commin({
    Key? key,
    required this.idMoughataa,
    required this.nomMouhgataa,
  }) : super(key: key);

  @override
  State<Commin> createState() => _ComminState();
}

class _ComminState extends State<Commin> {
  List<Map<String, dynamic>> dataList = [];

  @override
  void initState() {
    super.initState();
    getdata();
  }

  Future<void> getdata() async {
    try {
      var url = Uri.parse(Api.commin);
      var response = await http.get(url);
      if (response.statusCode == 200) {
        List<dynamic> jsonList = jsonDecode(response.body);
        setState(() {
          if (widget.idMoughataa > 0) {
            dataList = jsonList
                .cast<Map<String, dynamic>>()
                .where((item) => item["ID_maghataa_id"] == widget.idMoughataa)
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
      backgroundColor: Colors.deepPurple[50],
      
      appBar: AppBar(
        backgroundColor: Colors.deepPurple[50],
        title: Text(widget.nomMouhgataa != ""
            ? "les commin de ${widget.nomMouhgataa}"
            : "les commit "), // Display Wilaya Name
      ),
      body: ListView.separated(
        itemCount: dataList.length,
        itemBuilder: (context, index) {
          var item = dataList[index];
          return ListTile(
            title: Container(
              child: Text(' ${item["Nom_commune"]} '),
              padding: const EdgeInsets.symmetric(vertical: 15, horizontal: 20),
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
                  if (item["ID_commune"] != null) {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => village(
                          diCommit: item["ID_commune"],
                          nomCommin: item["Nom_commune"],
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
