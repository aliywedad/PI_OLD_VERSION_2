import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddWilaye from "./AddWilaye";
import ListMaghataa from "./listMaghataa";
import ModifierWilaya from "./modifierWilaye";
import {APIs} from './APIs'
import { CgAdd } from "react-icons/cg";



function WilayaList() {
   const [data, setData] = useState([]);
 
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async () => {

    try {
      const response = await axios.get(APIs.lesWilayas);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const delet = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    // Check if user confirmed
    if (confirmed) {
      // User confirmed, proceed with deletion logic
      // Put your deletion logic here
      try {
        const response = await axios.post('http://127.0.0.1:8000/suprimerWilaya/',{"id":id});
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
  const [code, setcode] = useState(0);
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
    // Your logic for confirming the action goes here
    // For example, deleting an item
    handleCloseModal(); // Close the modal after confirming
  };
  // modal pour ajoute une wilaya } ***********************************************************

  const filteredData = data.filter((dataObj) => {
    // Convert searchQuery to lower case for case-insensitive search
    const query = searchQuery.toLowerCase();
      for (const key in dataObj) {
      if (key === 'ID_wilaya' || typeof dataObj[key] !== 'string') continue;
  
      if (dataObj[key].toLowerCase().includes(query)) {
        return true; // Return true if any property matches the search query
      }
    }
  
    return false; 
  });
  
if (code>0){
  return <ListMaghataa code={code} setcode={setcode}/>
}
else
  return (
    <div className="overflow-x-auto myshadow border-2 text-n owrap sm:rounded-lg">

{/* <ConfirmationModal/> */}


 
  <Table responsive className=" ">
  <thead>
    <tr>
      <td colSpan={3} className="flex">
        <input type="search" id="default-search" className="w-60 py-1 m-1 ml-10 px-5 text-sm text-gray-900 border-1 rounded" placeholder="Search " 
          value={searchQuery}
          onChange={handleSearchChange} /> 
          <h1 onClick={handleShowModal} className="text-dark pointer mx-2" ><CgAdd /></h1>
      <ConfirmationModal
        show={showModal}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirm}
        prop={<AddWilaye
          fetchData={fetchData}
          handleClose={handleCloseModal}
        />}
      />
      </td>
    </tr>
    <tr>
      <th  className="  text-center">Nom</th>
      <th  className="  text-center">Code wilaya</th>
      <th  className="  text-center">Action </th>
    </tr>
  </thead>
  <tbody>
    {filteredData.map((dataObj) => (
      <tr key={dataObj.ID_wilaya}>
        <td className=" text-center">{dataObj.Nom_wilaya}</td>
        <td className=" text-center">
        {/* <Link style={{ color: 'black', textDecoration: 'None' }} to={`MaghataaParId/${dataObj.ID_wilaya}`}>{dataObj.Nom_wilaya}</Link> */}
        {dataObj.ID_wilaya}
        </td>
        <td className="text-center">
          {/* popup pour modifier les information du wilaye */}
      <DropdownButton
      align="end"
      title=""
      id="dropdown-menu-align-end"
      variant="light"   >
            <ConfirmationModalupdate
        show={showModal}
        handleClose={handleCloseModalupdate}
        handleConfirm={handleConfirmupdate}
         
        prop={<ModifierWilaya
          fetchData={fetchData}
          item={item}
          handleClose={handleCloseModalupdate}
        />}
      />
<Dropdown.Item eventKey="1" onClick={() => { setitem(dataObj);handleShowModalupdate();  console.log(item) }}>Modifie </Dropdown.Item>
      <Dropdown.Item eventKey="2" onClick={()=>{delet(dataObj.ID_wilaya)}}>suprimer</Dropdown.Item>
      <Dropdown.Item eventKey="3"onClick={()=>{setcode(dataObj.ID_wilaya)}}>visialise les moghataa</Dropdown.Item>
    </DropdownButton>
        </td>
      </tr>
    ))}
  </tbody>
</Table>

    </div>
  );
}
function ConfirmationModal({ show, handleClose, handleConfirm ,prop}) {
  return (
    <Modal show={show} onHide={handleClose}   backdrop="static" // Prevents closing when clicking outside the modal
    keyboard={false}>
      
      <Modal.Header closeButton>
        
        <Modal.Title>ajoutée wilaya</Modal.Title>
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
        
        <Modal.Title>modifier les information du wilaya</Modal.Title>
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
export default WilayaList;
