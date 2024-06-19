import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddUser from "./AddUser";
 



function Users() {
  const url = "http://127.0.0.1:8000/list_users/";
  const [data, setData] = useState([]);
 
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log("data is ",data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const delet = async (id) => {
    const confirmed = window.confirm('Voulez-vous vraiment supprimer cet utilisateur ?');
    // Check if user confirmed
    if (confirmed) {
      // User confirmed, proceed with deletion logic
      // Put your deletion logic here
      try {
        const response = await axios.post('http://127.0.0.1:8000/suprimerUtilisateur/',{"id":id});
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
  const ModifierEtat = async (id,active) => {
    const confirmed = window.confirm(`Voulez-vous vraiment ${active ? 'désactiver' : 'activer'} cet utilisateur ?`);

    // Check if user confirmed
    if (confirmed) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/modifierEtat/',{"id":id});
        console.log(response.data,"id = ",id)
        if(response.data==='200'){
          fetchData()
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      console.log('Done');
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
    // modal pour ajoute une Utilisateure { ***********************************************************
  const [showModal , setShowModal ] = useState(false);
  const handleShowModal  = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [ item, setitem] = useState({"ID_wilaya":0,"Nom_wilaya": " "});
  const handleConfirm  = () => {
    handleCloseModal(); 
  };
  // modal pour ajoute une Utilisateure } ***********************************************************


  const filteredData = data.filter((item) => {
    const query = searchQuery.toLowerCase();
      for (const key in item) {
      if (key === 'id' ||key === 'active' || typeof item[key] !== 'string') continue;
  
      if (item[key].toLowerCase().includes(query)) {
        return true; // Return true if any property matches the search query
      }
    }
  
    return false; 
  });
  
 
  return (
    <div className="overflow-x-auto myshadow border-2 m-3 text-nowrap sm:rounded-lg">

{/* <ConfirmationModal/> */}

  <Table responsive className=" ">
  <thead>
    <tr>
      <td colSpan={2} className="flex">
        <input type="search" id="default-search" className="w-60 py-1 m-1 ml-10 px-5 text-sm text-gray-900 border-1 rounded" placeholder="Search " 
          value={searchQuery}
          onChange={handleSearchChange} />           <h1 onClick={handleShowModal} className="text-primary pointer mx-2" >+</h1>
          <ConfirmationModal
            show={showModal}
            handleClose={handleCloseModal}
            handleConfirm={handleConfirm}
            prop={<AddUser
              fetchData={fetchData}
              handleClose={handleCloseModal}
            />}
          />
      </td>
     </tr>
    <tr>
      <th scope="col" className="px-6 py-3 text-center">Nom</th>
      <th scope="col" className="px-6 py-3 text-center">Prenom</th>
      <th scope="col" className="px-6 py-3 text-center">Email</th>
      <th scope="col" className="px-6 py-3 text-center">Role</th>
      <th scope="col" className="px-6 py-3 text-center ">Etat</th>
      <th scope="col" className="px-6 py-3 text-center "> </th>
     </tr>
  </thead>
  <tbody>
    {filteredData.map((item) => (
      <tr key={item.id}>
        <td className="w-4 p-4 text-center">{item.nom}</td>
        <td className="w-4 p-4 text-center">{item.prenom}</td>
        <td className="w-4 p-4 text-center">{item.email}</td>
        <td className="w-4 p-4 text-center">{item.role}</td>
        <td className="w-4 p-4 text-center">{item.active ? 'Active' : 'Desactive'}</td>
        <td className="w-4 p-4 text-center">
        <DropdownButton
      align="end"
      title=""
      id="dropdown-menu-align-end"
      variant="light"  >
<Dropdown.Item eventKey="1" onClick={() => {console.log(item) }}>Modifie </Dropdown.Item>
      <Dropdown.Item eventKey="2" onClick={()=>{delet(item.id)}}>suprimer</Dropdown.Item>
      <Dropdown.Item eventKey="3" onClick={()=>{ModifierEtat(item.id,item.active)}}>{item.active ? 'Desactiver' : 'Activer'} </Dropdown.Item>
    </DropdownButton>
        </td>
      </tr>
    ))}
  </tbody>
</Table>

    </div>
  );
}
 
export default Users;


function ConfirmationModal({ show, handleClose, handleConfirm ,prop}) {
    return (
      <Modal show={show} onHide={handleClose}   backdrop="static" // Prevents closing when clicking outside the modal
      keyboard={false}>
        
        <Modal.Header closeButton>
          
          <Modal.Title>ajoutée utilisateur</Modal.Title>
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
