import React, { useState, useEffect } from 'react';
import axios from "axios";
 import Repondre from './Repondre';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { CgAdd } from "react-icons/cg";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import CreateForm from './CreateForm';



function FormComponent() {
  useEffect(() => {
    fetchData();
  }, []);
  const [mydata, setFormData] = useState([])
  const [Render, setRender] = useState("select")

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/forms/');
      const data = await response.json();
      setFormData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // const[a,seta]=useState(false)
  const[b,setb]=useState(0)

  const delet = async (id) => {
    const confirmed = window.confirm('Êtes-vous sûr de vouloir supprimer cet élément ?');
    // Check if user confirmed
    if (confirmed) {
 
      try {
        const response = await axios.post('http://127.0.0.1:8000/delet_forms/',{"id":id});
        console.log(response.data,"id = ",id)
        if(response.data==='form deleted'){
          // console.log()
          fetchData()
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      console.log('Item deleted');
    } else {
       console.log('Deletion canceled');
    }

  };

  if(Render==="add") return <CreateForm setRender={setRender}/>
  if(Render==="select"){
    if(b>0){
      return <Repondre   setIdForm={setb} id={b}/>
    }else 
    return (
      <div className='container p-4'>
        <h1 className='col'>
          <CgAdd onClick={()=>setRender("add")} />
        </h1>

        
  <div className='row justify-content-center'>
     {mydata.map((item) => (
      <div key={item.formilair} className='col-lg-4 col-sm-12 mb-4'>
        <div className='d-flex justify-content-center'> {/* Add these classes */}
          <Card style={{ width: '18rem', backgroundColor: 'whitesmoke' }} className='rounded shadow'>
            <Card.Body>
              <Card.Text>
                <FloatingLabel controlId="floatingInput" label="Titre : " className="mb-3">
                  <Form.Control as="textarea" value={item.formilair} style={{ height: '5rem' }} />
                </FloatingLabel>
              </Card.Text>
              <Card.Text>
                <FloatingLabel controlId="floatingInput" label="Description : " className="mb-3">
                  <Form.Control as="textarea" style={{ height: '7rem' }} value={item.description} />
                </FloatingLabel>
                Nombre de questions : {item.questions}
              </Card.Text>
              <DropdownButton
                align="end"
                title=""
                id="dropdown-menu-align-end"
                variant="light"
              >
                <Dropdown.Item eventKey="1">Modifier</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={() => { delet(item.id) }}>Supprimer</Dropdown.Item>
                <Dropdown.Item eventKey="3" onClick={() => { setb(item.id)  }}>Détail</Dropdown.Item>
              </DropdownButton>
            </Card.Body>
          </Card>
        </div>
      </div>
    ))}
  </div>
</div>


  );
  }
}
export default FormComponent;
