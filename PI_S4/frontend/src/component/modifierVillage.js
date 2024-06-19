import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useForm } from 'react-hook-form';

export default function ModifierVillage({fetchData,handleClose,item}) {
  const { register, handleSubmit } = useForm();

  const onSubmit =async (data) => {
 
    console.log("data is ",data)
    try {
      const response = await axios.post('http://127.0.0.1:8000/modifierVillage/', data);
      console.log('Success:', response.data);
      if (response.data==="Data received and modified successfully"){
      fetchData();
      handleClose();
      }
    } catch (error) {
      console.error('Error:', error);
      // Optionally, you can handle errors here
    }
    
    
    
    // Reset the form fields after submission
  };

 

  const [data, setData] = useState([]);

  const wilayas = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/list_commune/");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    wilayas();
  }, []);

  return (
    <Container className='p-4 w-75 bg-light rounded shadow my-20'>
 
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type='hidden' value={item.idvillage} {...register("id")}/>
      <FloatingLabel controlId="floatingSelect" className="mb-3" label="Nom administratif">
        <Form.Control type="text" name="name" {...register("nomAdministratif")} defaultValue={item.nomAdministratif} className='m-2' placeholder="Nom Administratif" />                      
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" className="mb-3" label="Nom Local">
        <Form.Control type="text" name="name" {...register("NomLocal")} className='m-2' defaultValue={item.NomLocal} placeholder="Nom local" />                                              
      </FloatingLabel>      
      <FloatingLabel controlId="floatingSelect" className="mb-3" label="Distance aux ChefLieu">
        <Form.Control type="number" name="name" {...register("DistanceChefLieu")}  defaultValue={item.DistanceChefLieu} className='m-2' placeholder="Distance du ChefLieu" />                
      </FloatingLabel> 
      <FloatingLabel controlId="floatingSelect" className="mb-3" label="Distance aux Axes Principaux">
        <Form.Control type="number" name="name" {...register("DistanceAxesPrincipaux")} defaultValue={item.DistanceAxesPrincipaux} className='m-2' placeholder="Distance Axes Principaux" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" className="mb-3" label="Date du Creation">
        <Form.Control type="date" name="name" {...register("DateCreation")} defaultValue={item.DateCreation} className='m-2' placeholder="Date du Creation" />                               
      </FloatingLabel> 
      <FloatingLabel controlId="floatingSelect" className="mb-3" label="Composition Ethnique">
        <Form.Control type="text" name="name" {...register("CompositionEthnique")} defaultValue={item.CompositionEthnique} className='m-2' placeholder="Composition Ethnique" />             
      </FloatingLabel> 
      <FloatingLabel controlId="floatingSelect" className="mb-3" label="Autres Infos ">
        <Form.Control type="text" name="name" {...register("AutresInfosVillage")} defaultValue={item.AutresInfosVillage} className='m-2' placeholder="Autres Information sure le Village" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" className="mb-3" label="commin"> 
          <Form.Select {...register("commin") } required name="commin" className=""  >
            <option value={item.idCommin} >{item.commin}</option>
            {data.map((item) => (
              <option key={item.ID_commin} value={item.ID_commin}>
                {item.nom}
              </option>
            ))}
          </Form.Select>
        </FloatingLabel>        
        <button type="submit" className='btn btn-primary mr-2'>Soumetre</button>
       </form>
    </Container>
  );
}