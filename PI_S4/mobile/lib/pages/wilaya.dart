import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:mobile/api.dart';
import './moughataa.dart';
import 'Navbar.dart';
import 'package:flutter_search_bar/flutter_search_bar.dart';

void main() {
  runApp(Wilaya());
}


class Wilaya extends StatefulWidget {
  const Wilaya({Key? key}) : super(key: key);

  @override
  State<Wilaya> createState() => _WilayaState();
}

class _WilayaState extends State<Wilaya> {
  List<Map<String, dynamic>> dataList = [];
  List<Map<String, dynamic>> filteredList = [];

  @override
  void initState() {
    super.initState();
    getdata();
  }

  Future<void> getdata() async {
    try {
      var url = Uri.parse(Api.wilaya);
      var response = await http.get(url);
      if (response.statusCode == 200) {
        List<dynamic> jsonList = jsonDecode(response.body);
        setState(() {
          dataList = jsonList.cast<Map<String, dynamic>>();
          filteredList = dataList; // Initialize filtered list with all data
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
    return Directionality(
        textDirection: TextDirection.ltr, // or TextDirection.rtl
        child: Scaffold(
              // backgroundColor: Colors.grey[300],
                backgroundColor: Colors.deepPurple[50],


      appBar: AppBar(
                // backgroundColor: Colors.grey[300],
                backgroundColor: Colors.deepPurple[50],

        title:  Padding(
            padding: EdgeInsets.all(16.0),
              child:TextField(
                    onChanged: (value) {
                      setState(() {
                        // Filter the dataList based on the search value
                        filteredList = dataList.where((item) =>
                            item['Nom_wilaya']
                                .toLowerCase()
                                .contains(value.toLowerCase())).toList();
                      });
                    },
                    decoration: const InputDecoration(
                      labelText: 'Search',
                      border: OutlineInputBorder(),
                      contentPadding: EdgeInsets.symmetric(vertical: 10.0, horizontal: 10.0), // Adjust padding

                    ),
                  ),
              ),     
        
      ),
      body: Column(
        children: [
         
          Expanded(
            child: ListView.separated(
              itemCount: filteredList.length,
              itemBuilder: (context, index) {
                var item = filteredList[index];
                return ListTile(
                  title: Container( child :Text(' ${item["Nom_wilaya"]} \n A0 ${item["ID_wilaya"]}  '),
                  padding: const EdgeInsets.symmetric(vertical: 10,horizontal: 20),
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
              ),),
                  
                  onTap: () {
                    setState(() {
                      _tapCount++;
                      if (_tapCount == 2) {
                        if (item["ID_wilaya"] != null) {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => Moughataa(
                                idWilaya: item["ID_wilaya"],
                                nomWilaya: item["Nom_wilaya"],
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
              separatorBuilder: (context, index) => Divider(color: Colors.grey[300],),
            ),
          ),
        ],
      ),
    ));
  }
}
