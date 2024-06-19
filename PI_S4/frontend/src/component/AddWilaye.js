import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {APIs} from './APIs'

export default function AddWilaye({fetchData,handleClose}) {
  const [formData, setFormData] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setFormData([...formData, data]); // Add new form data to the existing array
    reset(); // Reset the form fields after submission
  };

  const soumetre = async () => {
    try {
      const response = await axios.post(APIs.AddWilaye, { formData });
      console.log('Success:', response.data);
      fetchData()
      handleClose()

      // Optionally, you can handle successful response here
    } catch (error) {
      console.error('Error:', error);
      // Optionally, you can handle errors here
    }
  };

  return (
    <Container className='p-4 w-75 bg-light rounded shadow my-20'>
      <div className='row'>
        {formData.map((item, index) => (
          <div key={index} className='col-lg-6'>
            <h5>{item.name}</h5>
            <p>{item.code}</p>
            <button onClick={()=>{setFormData(formData.filter((item, inde) => inde !== index));}}> X </button>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Control type="text" name="name" {...register("name")}   className='m-2' placeholder="Nom du wilaye" />
        <Form.Control type="number" placeholder="Code" name="code"   className='m-2' {...register("code")} />
        <button type="submit" className='btn btn-primary mr-2'>Add Wilaye</button>
        <button type="submit" className='btn btn-secondary' onClick={soumetre}>Soumetre</button>
      </form>
    </Container>
  );
}
