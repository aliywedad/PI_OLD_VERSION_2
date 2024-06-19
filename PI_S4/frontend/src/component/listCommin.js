import React, { useState, useEffect } from "react";

import Table from 'react-bootstrap/Table';
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
 
import ListVillage from "./ListVillage";
import { CgAdd } from "react-icons/cg";

 import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
 
import AddCommin from "./AddCommin";
import ModifierCommin from "./modifierCommin";
import { TfiBackLeft } from "react-icons/tfi";

function ListCommin({id,setfilterMoghataa}) {
  const url = "http://127.0.0.1:8000/list_commune/";
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filtervillage, setfiltervillage] = useState(-1);


  // modal pour ajoute une wilaya { ***********************************************************
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleConfirm = () => {
    // Your logic for confirming the action goes here
    // For example, deleting an item
    handleCloseModal(); // Close the modal after confirming
  };
  // modal pour ajoute une wilaya } ***********************************************************



  // modal pour ajoute une wilaya { ***********************************************************
   const [showModalupdate, setShowModalupdate] = useState(false);
   const handleShowModalupdate = () => setShowModal(true);
   const handleCloseModalupdate = () => setShowModal(false);
   const [ item, setitem] = useState({"ID_wilaya":0,"Nom_wilaya": " "});
   const handleConfirmupdate = () => {
     handleCloseModal();  
   };
   // modal pour ajoute une wilaya } ***********************************************************
 

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
  const delet = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    // Check if user confirmed
    if (confirmed) {
      // User confirmed, proceed with deletion logic
      // Put your deletion logic here
      try {
        const response = await axios.post('http://127.0.0.1:8000/suprimercommin/',{"id":id});
        console.log(response.data,"id = ",id)
        if(response.data==='200'){
          fetchData()
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      console.log('Item deleted');
    } else {
      // User canceled, do nothing or show another message
      console.log('Deletion canceled');
    }

  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((dataObj) => {
    // Convert searchQuery to lower case for case-insensitive search
    const query = searchQuery.toLowerCase();
  
    // Iterate over each property of dataObj
    for (const key in dataObj) {
      // Skip iteration if key is 'idvillage' or any other property you don't want to search in
      if (key === 'ID_commin' || typeof dataObj[key] !== 'string') continue;
  
      // Check if the value of the current property includes the search query
      if (dataObj[key].toLowerCase().includes(query)) {
        return true; // Return true if any property matches the search query
      }
    }
  
    return false; // Return false if no property matches the search query
  });
  
  if(filtervillage && filtervillage > 0){
    return <ListVillage id={filtervillage} setfiltervillage={setfiltervillage}/>
  }
  else
  return (
    <div className="overflow-x-auto text-nowrap myshadow border-2 sm:rounded-lg ">
        {/*************************************************( search input )*******************************************************888 */}

  {/*************************************************( end of the search input )*******************************************************888 */}


  <Table responsive className="border " >
        <thead className="">
        <tr>
        <td colSpan={2} className="flex">
        {id ? (<h1 className="mr-3"><TfiBackLeft  onClick={()=>{setfilterMoghataa(0)}}  alt=""/></h1>) : ""}

        <input type="search" id="default-search" className="w-60 py-1 m-1 ml-10 px-5 text-sm text-gray-900 border-1 rounded" placeholder="Search " 
          value={searchQuery}
          onChange={handleSearchChange} /> 
          <h1 onClick={handleShowModal} className="text-dark pointer mx-2 " > <CgAdd/></h1>
              <ConfirmationModal
                show={showModal}
                handleClose={handleCloseModal}
                handleConfirm={handleConfirm}
                prop={<AddCommin
                  fetchData={fetchData}
                  handleClose={handleCloseModal}
                />}
              />
                  {/* {id ? (<button className="btn btn-success" onClick={()=>{setfilterMoghataa(0)}}>go back</button>) : ""} */}

                  </td>
            </tr>
          <tr>
            <th scope="col" className="px-6 py-3 text-center">Nom du Commins </th>
            <th scope="col" className="px-6 py-3 text-center">moughataa</th>
            <th scope="col" className="w-25 px-6 py-3 text-center">Action </th>

          </tr>
        </thead>
        <tbody>
          {id ? filteredData.filter(item=>(item.ID_maghataa===id)).map((dataObj) => (
            <tr key={dataObj.ID_commin} className="bg-white border-b darkk:bg-gray-800 darkk:border-gray-700 hover:bg-gray-100 darkk:hover:bg-gray-600">
              <td td className="w-4 p-4 text-center " onClick={()=>{setfiltervillage(dataObj.ID_commin)}}>{dataObj.nom}</td>
              <td td className="w-4 p-4 text-center">{dataObj.moughataa}</td>
              <td className="text-center">
                  <DropdownButton
                align="end"
                title=""
                id="dropdown-menu-align-end"
                variant="light"   >
                        <ConfirmationModalupdate
                          show={showModal}
                          handleClose={handleCloseModalupdate}
                          handleConfirm={handleConfirmupdate}
                          
                          prop={<ModifierCommin
                            fetchData={fetchData}
                            item={item}
                            handleClose={handleCloseModalupdate}
                          />}
                        />
                <Dropdown.Item eventKey="1" onClick={() => {  setitem(dataObj); console.log("item is ",item);handleShowModalupdate() }}>Modifie </Dropdown.Item>

                <Dropdown.Item eventKey="2" >suprimer</Dropdown.Item>
                <Dropdown.Item eventKey="3"onClick={()=>{setfiltervillage(dataObj.ID_commin)}}>visialise les villages</Dropdown.Item>
              </DropdownButton>
            </td>
            </tr>
          )) :
          filteredData.map((dataObj) => (
            <tr key={dataObj.ID_commin} className="bg-white border-b darkk:bg-gray-800 darkk:border-gray-700 hover:bg-gray-100 darkk:hover:bg-gray-600">
              <td td className="w-4 p-4 text-center " onClick={()=>{setfiltervillage(dataObj.ID_commin)}}>{dataObj.nom}</td>
              <td td className="w-4 p-4 text-center">{dataObj.moughataa}</td>
              <td className="text-center">
                  <DropdownButton
                align="end"
                title=""
                id="dropdown-menu-align-end"
                variant="light"   >
                        <ConfirmationModalupdate
                          show={showModal}
                          handleClose={handleCloseModalupdate}
                          handleConfirm={handleConfirmupdate}
                          
                          prop={<ModifierCommin
                            fetchData={fetchData}
                            item={item}
                            handleClose={handleCloseModalupdate}
                          />}
                        />
                <Dropdown.Item eventKey="1" onClick={() => {  setitem(dataObj); console.log(item);handleShowModalupdate() }}>Modifie </Dropdown.Item>

                <Dropdown.Item eventKey="2" onClick={()=>{delet(dataObj.ID_commin)}}>suprimer</Dropdown.Item>
                <Dropdown.Item eventKey="3"onClick={()=>{setfiltervillage(dataObj.ID_commin)}}>visialise les villages</Dropdown.Item>

              </DropdownButton>
            </td>
            </tr>
          ))}

        </tbody>
      </Table>
    </div>
  );
}

export default ListCommin;
function ConfirmationModal({ show, handleClose, handleConfirm ,prop}) {
  return (
    <Modal show={show} onHide={handleClose}   backdrop="static" // Prevents closing when clicking outside the modal
    keyboard={false}>
      
      <Modal.Header closeButton>
        
        <Modal.Title>ajoutée commin</Modal.Title>
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
        
        <Modal.Title>modifier les information du Commin</Modal.Title>
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
