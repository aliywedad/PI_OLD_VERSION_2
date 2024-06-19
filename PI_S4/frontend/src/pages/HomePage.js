import MyContainer from "../component/MyContainer";
import Side from "../component/Side";
import {  Logout  } from '../component/Cookies';
import { useNavigate} from 'react-router-dom';
import Navebar from '../component/NavebarDA';

import {useState} from 'react'
 import HomeComponent from "../component/HomeComponent";
import VerificationLogin from "../component/VerificationLogin";
export default function HomePage({ toggle, setToggle,props }) {
  const [Render,SetRender]=useState("wilaya")
    const navigate = useNavigate();
    // removeDataFromCookie()


    const logout=()=>{
      Logout()
      navigate('/');

    }


    return (
  <>
 
  <VerificationLogin/>
  <Side toggle={toggle} setToggle={setToggle}  logout={logout} />
  <Navebar toggle={toggle} setToggle={setToggle} Render={Render} SetRender={SetRender}/>
  <MyContainer toggle={toggle} SetRender={SetRender} props={<HomeComponent Render={Render}/>} setToggle={setToggle}/>
  </>
    );}