 
import WilayaList from './listwilaya';
import ListMaghataa from './listMaghataa';
import Container from 'react-bootstrap/Container';
import ListCommin from './listCommin';
import ListVillage from './ListVillage';
  
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useState } from 'react';
 
export default function HomeComponent({ toggle, setToggle,props,Render }) {
  // const [Render,setRender]=useState("wilaya")
    return (
  <>

 

  <Container className=' p-4  bg-gr ay-100 '>


  {Render==="wilaya" && <WilayaList/> }
  {Render==="moghataa" && <ListMaghataa/> }
  {Render==="commun" && <ListCommin/> }
  {Render==="village" && <ListVillage/> }
{/* 
  <Tabs
      defaultActiveKey="Wilaya"
      id="justify-tab-example"
      className="mb-3 border-1 pt-3 px-0 whitesmoke p-1"
      justify
    >

      <Tab eventKey="Wilaya" title={<span style={{ color: 'black' }}>
        Wilaya <FontAwesomeIcon icon={faCity} className="menu-icon" /> </span>}  className=''>
        <WilayaList/>
      </Tab>
      <Tab eventKey="Moughataa" title={<span style={{ color: 'black' }}>
        Moughataa               <FontAwesomeIcon icon={faBuilding} className="menu-icon" />

        </span>}>
         <ListMaghataa/>
        </Tab>
      <Tab eventKey="Commins" title={<span style={{ color: 'black' }}>Commins <FontAwesomeIcon icon={faHouse} /></span>}>
        <ListCommin/>
      </Tab>
      <Tab eventKey="villages" title={<span style={{ color: 'black' }}>  <img src={village} className='rounded-circle img-fluid sm-imeg   ' alt=''/>  
</span>}>
        <ListVillage/>
      </Tab>
    </Tabs> */}
    </Container>

  </>
    );}