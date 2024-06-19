import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';

import Table from 'react-bootstrap/Table';
import AddVillage from "./AddVillage";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ModifierVillage from "./modifierVillage";
import Repondre from "./Repondre";
import { CgAdd } from "react-icons/cg";
import { TfiBackLeft } from "react-icons/tfi";


function ListVillage({id,setfiltervillage}) {
  const url = "http://127.0.0.1:8000/list_Village/";
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [IdForm, setIdForm] = useState(0);
  const [villageInfo, setvillageInfo] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const [forms, setforms] = useState([]);

  const formsdata = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/forms/');
      const data = await response.json();
      setforms(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 
  useEffect(() => {
    fetchData();
    formsdata();

  }, []);
 
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

    // modal pour ajoute une village { ***********************************************************
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
  
    const handleConfirm = () => {
      handleCloseModal();  
    };
    // modal pour ajoute une village } ***********************************************************
  
  // modal pour ajoute une wilaya { ***********************************************************
   const [showModalupdate, setShowModalupdate] = useState(false);
   const handleShowModalupdate = () => setShowModalupdate(true);
   const handleCloseModalupdate = () => setShowModalupdate(false);
   const [ item, setitem] = useState({});
   const handleConfirmupdate = () => {
     handleCloseModalupdate();  
   };
   // modal pour ajoute une wilaya } ***********************************************************
 

  

  const filteredData = data.filter((dataObj) => {
    // Convert searchQuery to lower case for case-insensitive search
    const query = searchQuery.toLowerCase();
  
    // Iterate over each property of dataObj
    for (const key in dataObj) {
      // Skip iteration if key is 'idvillage' or any other property you don't want to search in
      if (key === 'idvillage' || typeof dataObj[key] !== 'string') continue;
  
      // Check if the value of the current property includes the search query
      if (dataObj[key].toLowerCase().includes(query)) {
        return true; // Return true if any property matches the search query
      }
    }
  
    return false; // Return false if no property matches the search query
  });
  
if(IdForm>0 ) return <Repondre id={IdForm} villageInfo={villageInfo}    setIdForm={setIdForm}/>
else
  return (
    <div className="overflow-x-auto myshadow border-2 text-nowrap sm:rounded-lg">
  <Table responsive>
        <thead className="">
        <tr>
        <td colSpan={2} className="flex">
        {id ? (<h1 className="mr-3"><TfiBackLeft  onClick={()=>{setfiltervillage(0)}}  alt=""/></h1>) : ""}

 
        <input type="search" id="default-search" className="w-60 py-1 m-1 ml-10 px-5 text-sm text-gray-900 border-1 rounded" placeholder="Search " 
          value={searchQuery}
          onChange={handleSearchChange} /> 
          <h1 onClick={handleShowModal} className="text-dark pointer mx-2" ><CgAdd /></h1>
          

              <ConfirmationModal
                show={showModal}
                handleClose={handleCloseModal}
                handleConfirm={handleConfirm}
                prop={<AddVillage
                  fetchData={fetchData}
                  handleClose={handleCloseModal}
                />}
              />

                  </td>
            </tr>
          <tr>
          <th scope="col" className="px-6 py-3 text-center">Nom Admistratif du village  </th>
          <th scope="col" className="px-6 py-3 text-center">Nom Local </th>
          <th scope="col" className="px-6 py-3 text-center">Distance Chef Lieu </th>
          <th scope="col" className="px-6 py-3 text-center">Date du Creation </th>
          <th scope="col" className="px-6 py-3 text-center">commin</th>
          <th scope="col" className="px-6 py-3 text-center"> </th>
          </tr>
        </thead>
        <tbody>
          { id ? filteredData.filter((item)=>(item.idCommin===id)).map((dataObj) => (
            <tr  key={dataObj.idvillage} className="bg-white border-b darkk:bg-gray-800 darkk:border-gray-700 hover:bg-gray-100 darkk:hover:bg-gray-600">
              <td className=" p-3 text-center" >{dataObj.nomAdministratif}</td>
              <td className=" p-3 text-center">{dataObj.NomLocal}</td>
              <td className=" p-3 text-center">{dataObj.DistanceChefLieu}</td>
              <td className=" p-3 text-center">{dataObj.DateCreation}</td>
              <td className=" p-3 text-center">{dataObj.commin}</td>
              <td className="text-center">
                  <DropdownButton
                align="end"
                title=""
                id="dropdown-menu-align-end"
                variant="light"   >

                <Dropdown.Item eventKey="1" onClick={() => {  setitem(dataObj); console.log(item);handleShowModalupdate() }}>Modifie </Dropdown.Item>
                <Dropdown.Item eventKey="2" >suprimer</Dropdown.Item>
                <Dropdown.Item eventKey="3" >
                <DropdownButton align="end" title="Remplir un formulaire"
                id="dropdown-menu-align-end"
                variant="light"   >
                  {forms.map((form)=>(
                      <Dropdown.Item eventKey="2" onClick={() => {setIdForm(form.id);setvillageInfo(dataObj)}}>{form.formilair}</Dropdown.Item>
              ))}
                </DropdownButton> 
                </Dropdown.Item>





</DropdownButton>
            </td>
            </tr>
          )) :
          filteredData.map((dataObj) => (
            <tr key={dataObj.idvillage} className="bg-white border-b darkk:bg-gray-800 darkk:border-gray-700 hover:bg-gray-100 darkk:hover:bg-gray-600">
              <td className=" p-3 text-center">{dataObj.nomAdministratif}</td>
              <td className=" p-3 text-center">{dataObj.NomLocal}</td>
              <td className=" p-3 text-center">{dataObj.DistanceChefLieu}</td>
              <td className=" p-3 text-center">{dataObj.DateCreation}</td>
              <td className=" p-3 text-center">{dataObj.commin}</td>
              <td className="text-center">
              <DropdownButton
                align="end"
                title=""
                id="dropdown-menu-align-end"
                variant="light"   >

                <Dropdown.Item eventKey="1" onClick={() => {  setitem(dataObj); console.log(item);handleShowModalupdate() }}>Modifie </Dropdown.Item>
                <Dropdown.Item eventKey="2" >suprimer</Dropdown.Item>
                 <DropdownButton align="end" title="Remplir un formulaire"
                id="dropdown-menu-align-end"
                variant="light"   >
                  {forms.map((form)=>(
                      <Dropdown.Item eventKey="2" onClick={() => {setIdForm(form.id);setvillageInfo(dataObj)}}>{form.formilair}</Dropdown.Item>
                    ))}
                </DropdownButton>

              </DropdownButton>
            </td>
            </tr>
          ))}
                  <ConfirmationModalupdate
                    show={showModalupdate}
                    handleClose={handleCloseModalupdate}
                    handleConfirm={handleConfirmupdate}
                    
                    prop={<ModifierVillage
                      fetchData={fetchData}
                      item={item}
                      handleClose={handleCloseModalupdate}
                    />}
                  />

        </tbody>
      </Table>
    </div>
  );
}

export default ListVillage;


function ConfirmationModal({ show, handleClose, handleConfirm ,prop}) {
  return (
    <Modal show={show} onHide={handleClose}   backdrop="static" // Prevents closing when clicking outside the modal
    keyboard={false}>
      
      <Modal.Header closeButton>
        
        <Modal.Title>ajoutée Village</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {prop}
     
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


 
function ConfirmationModalupdate({ show, handleClose, handleConfirm ,prop}) {
  return (
    <Modal show={show} onHide={handleClose}   backdrop="static" // Prevents closing when clicking outside the modal
    keyboard={false}>
      
      <Modal.Header closeButton>
        
        <Modal.Title>modifier les information du Village</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {prop}
      </Modal.Body>
 
    </Modal>
  );
}
