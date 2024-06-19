import MyContainer from "../component/MyContainer";
import Side from "../component/Side";
import Navebar from "../component/NavebarForms";
import {useState} from 'react'

import FormHomeComponent from "../component/FormHomeComponent";
export default function FormHomePage({ toggle, setToggle,props }) {
    // const [toggle, setToggle] = useState(false); 
    const [Render,SetRender]=useState("wilaya")

  
    return (
  <>
  <Side toggle={toggle} setToggle={setToggle} />
  <Navebar toggle={toggle} setToggle={setToggle} Render={Render} SetRender={SetRender}/>
  <MyContainer toggle={toggle} SetRender={SetRender} props={<FormHomeComponent Render={Render}/>} setToggle={setToggle}/>

  </>
    );}