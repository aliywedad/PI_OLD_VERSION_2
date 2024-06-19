import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function ModifierCommin({ fetchData, handleClose, item }) {
  const { register, handleSubmit } = useForm();
  const [selectedWilaya, setSelectedWilaya] = useState(item.codeWilaye); // State to hold the selected wilaya code

  const onSubmit = async (data) => {
    console.log(data) // Assign the selected wilaya code to the data object

    if(selectedWilaya)    data.code = selectedWilaya;

    console.log(data) // Assign the selected wilaya code to the data object
    try {
      const response = await axios.post('http://127.0.0.1:8000/modifierCommin/', data);
      console.log('Success:', response.data);
      if (response.data === "Data received and modified successfully") {
        fetchData();
        handleClose();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
      <input type='hidden' value={item.ID_commin} {...register("id")}/>

        <Form.Control type="text" name="name" {...register("nom")} defaultValue={item.nom} className='m-1' />
        <FloatingLabel controlId="floatingSelect" className="mb-3" label="Moughataa">
          <Form.Select
            {...register("code")}
            required
            name="wilaya"
            className="m-1"
            value={selectedWilaya} // Bind the value to the state variable
            onChange={(e) => setSelectedWilaya(e.target.value)} // Update the state variable on change
          >
                                        <option key={item.ID_maghataa} value={item.ID_maghataa}>
                            {item.moughataa}
                          </option>
            {data.map((item) => (
                            <option key={item.ID_maghataa} value={item.ID_maghataa}>
                            {item.nom}
                          </option>
            ))}
          </Form.Select>
        </FloatingLabel>
        <button type="submit" className='btn btn-secondary'>Soumetre</button>
      </form>
    </Container>
  );
}
