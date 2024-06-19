import axios from 'axios';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
import { APIs } from './APIs';

export default function AddUser({fetchData,handleClose}) {
   const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    //  reset(); // Reset the form fields after submission
    try {
      const response = await axios.post(APIs.AjouterUser, { data });
      console.log('Success:', response.data);
      fetchData()
      handleClose()
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const soumetre = async (data) => {
  
  };

  return (
    <Container className='p-4 w-75 bg-light rounded shadow my-20'>
 
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Control  type="text" name="name" {...register("nom")}   className='m-2' placeholder="Nom " />
        <Form.Control type="text" name="name" {...register("prenom")}   className='m-2' placeholder="Prenom" />
        <Form.Control type="email" name="name" {...register("email")}   className='m-2' placeholder="Email" />
        <Form.Control type="number"    defaultValue={0} name="name" {...register("tel")}   className='m-2' placeholder="Tel" />
         <FloatingLabel controlId="floatingSelect" className="m-2" label="Role">
          <Form.Select  {...register("role") } required name="Role" className=""  >
          <option disabled  >Adminst  rateure</option>
          <option  value={'admin'} >Adminstrateure</option>
          <option value={'user'} >utilisateur</option>
             
          </Form.Select>
        </FloatingLabel> 
        <Form.Check className='m-2' label={'active?'} name="name" {...register("active")}      />


        <button type="submit" className='btn btn-primary mr-2'>Soumetre</button>
      </form>
    </Container>
  );
}
// class users(models.Model): 
    // tel = models.IntegerField()  
    // email = models.CharField(max_length=100,unique=True)
    // password = models.CharField(max_length=100) 
    // nom = models.CharField(max_length=100) 
    // prenom = models.CharField(max_length=100) 
    // role = models.CharField(max_length=100) 
    // active=models.BooleanField()