import 'package:flutter/material.dart';
// import 'package:google_nav_bar/google_nav_bar.dart';
import './wilaya.dart';
import './moughataa.dart';
import './commin.dart';
import 'village.dart';

class BottomNavBar extends StatefulWidget {
  BottomNavBar();

  @override
  BottomNavBarState createState() => BottomNavBarState();
}

class BottomNavBarState extends State<BottomNavBar> {
  int selected = 0;
  List<Widget> listwidget = const [
    Wilaya(),
    Moughataa(idWilaya: 0, nomWilaya: ""),
    Commin(idMoughataa: 0,nomMouhgataa: "",),
    village(diCommit: 0, nomCommin: ""),
  ];
  List<String> listtitels = ["les wilaya", "les moghataa", "commin", "village"];
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: 
      Directionality(
        textDirection: TextDirection.ltr,
        child:
      Scaffold(
        
          bottomNavigationBar: BottomNavigationBar(
            selectedItemColor: Colors.deepPurple[300],
              type: BottomNavigationBarType.fixed, // Set type to fixed

            currentIndex: selected,
            unselectedItemColor: Colors.black,
            // backgroundColor: Colors.grey[300],
            backgroundColor: Colors.white,
            onTap: (val) {
              print(val);
              setState(() {
                selected = val;
              });
            },
            selectedFontSize: 15,
            items: const [
              BottomNavigationBarItem(icon: Icon(Icons.abc), label: "Wilaya"),
              BottomNavigationBarItem(icon: Icon(Icons.vertical_distribute), label: "Moughataa"),
              BottomNavigationBarItem(icon: Icon(Icons.home), label: "Commin"),
              BottomNavigationBarItem(icon: Icon(Icons.home), label: "village"),
            ],
          ),
          appBar: AppBar(
            title: Text(
              (listtitels.elementAt(selected)),
            ),
            // backgroundColor: Colors.grey[300],
            backgroundColor: Colors.deepPurple[50],
          ),
          body: Container(
            child: listwidget.elementAt(selected),
          )),
    ));
  }
}
