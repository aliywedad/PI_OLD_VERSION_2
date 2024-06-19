import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useForm } from 'react-hook-form';
import {APIs} from './APIs'

export default function AddVillage({ fetchData, handleClose }) {
  const { register, handleSubmit } = useForm();

  const onSubmit =async (data) => {
 
    console.log(data)
    try {
      const response = await axios.post(APIs.AjouterVillage, data);
      console.log('Success:', response.data);
      if (response.data="Data received successfully"){
      fetchData();
      handleClose();
      }

      // Optionally, you can handle successful response here
    } catch (error) {
      console.error('Error:', error);
      // Optionally, you can handle errors here
    }
    
    
    
    // Reset the form fields after submission
  };

 

  const [data, setData] = useState([]);

  const wilayas = async () => {
    try {
      const response = await axios.get(APIs.lesCommuns);
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
      <Form.Control type="text" name="name" {...register("NomAdministratifVillage")} className='m-2' placeholder="Nom Administratif" />
      <Form.Control type="text" name="name" {...register("NomLocal")} className='m-2' placeholder="Nom local" />
      <Form.Control type="number" name="name" {...register("DistanceChefLieu")} className='m-2' placeholder="Distance du ChefLieu" />
      <Form.Control type="number" name="name" {...register("DistanceAxesPrincipaux")} className='m-2' placeholder="Distance Axes Principaux" />
      <Form.Control type="date" name="name" {...register("DateCreation")} className='m-2' placeholder="Date du Creation" />
      <Form.Control type="text" name="name" {...register("CompositionEthnique")} className='m-2' placeholder="Composition Ethnique" />
      <Form.Control type="text" name="name" {...register("AutresInfosVillage")} className='m-2' placeholder="Autres Information sure le Village" />
      <FloatingLabel controlId="floatingSelect" className="mb-3" label="commin">
          <Form.Select {...register("commin") } required name="commin" className=""  >
            <option disabled>Choisissez la commin.</option>
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
 