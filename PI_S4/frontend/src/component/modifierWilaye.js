import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ModifierWilaya({fetchData,handleClose,item}) {
  const { register, handleSubmit } = useForm();
  const [itemdata, setItemData] = useState({
    "Nom_wilaya": item.Nom_wilaya,
    "ID_wilaya": item.ID_wilaya
  });  
  const onSubmit =async (data) => {
    console.log(data)
    try {
      const response = await axios.post('http://127.0.0.1:8000/modifierWilaye/', data);
      console.log('Success:', response.data);
      fetchData();

      
      if (response.data==="Data received and modified successfully"){
      fetchData();
      handleClose();
      }
    } catch (error) {
      console.error('Error:', error);
    }  };

  return (
    <Container className='p-4 w-75 bg-light rounded shadow my-20'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='hidden' value={item.ID_wilaya} {...register("id")} />
         <Form.Control type="text" name="name"   {...register("nom")} defaultValue={itemdata.Nom_wilaya} className='m-2' placeholder="Nom du wilaye" />
        <Form.Control type="number" placeholder="Code" {...register("code")} name="code" defaultValue={item.ID_wilaya} className='m-2' {...register("code")} />
         <button type="submit" className='btn btn-secondary'>Soumetre</button>
      </form>
    </Container>
  );
}
