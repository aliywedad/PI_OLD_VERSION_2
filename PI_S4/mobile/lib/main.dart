import 'package:flutter/material.dart';
import './pages/wilaya.dart';
import './exampls/statfulwideget.dart';
import './pages/Navbar.dart';
import './pages/commin.dart';

void main() {
  runApp(BottomNavBar());
}

int i = 0;

class MyWidget extends StatefulWidget {
  const MyWidget({super.key});
  State<MyWidget> createState() => _Myapp();
}

class _Myapp extends State<MyWidget> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
      appBar: AppBar(
        title: Text("hejjjllo"),
      ),
      body: Container(
        child: Column(children: [
          Text("hello $i"),
          IconButton(
              onPressed: () {
                setState(() {
                  i++;
                });
              },
              icon: Icon(Icons.add))
        ]),
      ),
    ));
  }
}
