import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useForm } from 'react-hook-form';
import {APIs} from './APIs'

export default function AddCommin({ fetchData, handleClose }) {
  const { register, handleSubmit } = useForm();
  const onSubmit =async (data) => {
    console.log(data)
    try {
      const response = await axios.post(APIs.AjouterCommun, data);
      console.log('Success:', response.data);
      if (response.data==="Data received successfully"){
      fetchData();
      handleClose();
      }
    } catch (error) {
      console.error('Error:', error);
    }  };

 

  const [data, setData] = useState([]);

  const moghataa = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/list_Maghataa/");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    moghataa();
  }, []);

  return (
    <Container className='p-4 w-75 bg-light rounded shadow my-20'>
 
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Control type="text" name="name" {...register("nom")} className='m-2' placeholder="Nom du commin" />
        <FloatingLabel controlId="floatingSelect" className="mb-3" label="moghataa">
          <Form.Select {...register("moghataa") } required name="moghataa" className=""  >
            <option disabled>Choisissez la moughataa.</option>
            {data.map((item) => (
              <option key={item.ID_maghataa} value={item.ID_maghataa}>
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
