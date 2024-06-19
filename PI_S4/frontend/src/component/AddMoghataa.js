import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useForm } from 'react-hook-form';
import {APIs} from './APIs'

export default function AddMoghataa({ fetchData, handleClose }) {
  const [formData, setFormData] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit =async (data) => {
 
    console.log(data)
    try {
      const response = await axios.post(APIs.AjouterMoghataa, data);
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
      const response = await axios.get("http://127.0.0.1:8000/list_wilaya/");
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
        <Form.Control type="text" name="name" {...register("nom")} className='m-2' placeholder="Nom du moghataa" />
        <FloatingLabel controlId="floatingSelect" className="mb-3" label="Wilaya">
          <Form.Select {...register("wilaya") } required name="wilaya" className=""  >
            <option disabled>Choisissez la wilaya.</option>
            {data.map((item) => (
              <option key={item.ID_wilaya} value={item.ID_wilaya}>
                {item.Nom_wilaya}
              </option>
            ))}
          </Form.Select>
        </FloatingLabel>        
        <button type="submit" className='btn btn-primary mr-2'>Soumetre</button>
       </form>
    </Container>
  );
}
