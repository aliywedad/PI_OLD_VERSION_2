import React, { useState,useEffect } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {APIs} from './APIs'
import { TfiBackLeft } from "react-icons/tfi";

import axios from 'axios';
import './style.css'
function CreateForm({setRender}) {
  const [checkedItems, setCheckedItems] = useState([]);

  const [formData, setFormData] = useState({
    title: '',
    ifrastricteur: false,
    questionPreDefinie: [],
    description: '',
    questions: [],

  });

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addQuestion = () => {
    setFormData({
      ...formData,
      questions: [
        ...formData.questions,
        {
          text: '',
          type: 'text',
          categorie: '',
          choices: [],
        }
      ]
    });
  };



  const handleQuestionChange = (index, e) => {
    const { name, value } = e.target;
    const updatedQuestions = [...formData.questions];
    
    if (name === 'type') {
      updatedQuestions[index].type = value;
      
      if (value === 'choices' || value === 'radio') {
        updatedQuestions[index].choices = [''];
      } else {
        delete updatedQuestions[index].choices;
      }
    }
    
    updatedQuestions[index][name] = value;
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(APIs.AjouterFormilaire, formData);
      console.log('Form created successfully:', response.data);
      console.error('the data:', formData);

    } catch (error) {
      console.error('Error creating form:', formData);
    }
  };
  const handleCheckboxChange = (name) => {
    const isChecked = formData.questionPreDefinie.includes(name);
    let updatedPreDefinie = [];

    if (isChecked) {
      updatedPreDefinie = formData.questionPreDefinie.filter(item => item !== name);
    } else {
      updatedPreDefinie = [...formData.questionPreDefinie, name];
    }

    setFormData({
      ...formData,
      questionPreDefinie: updatedPreDefinie,
    });
  };

  return (
    <div className='w-100 p-4'>
      <h2 className="mr-3"><TfiBackLeft  onClick={()=>{setRender("select")}}  alt=""/></h2>
      <form onSubmit={handleSubmit}>
        <div className='my-10  p-3 border-2   whitesmoke rounded shadow   '>
        <FloatingLabel controlId="floatingInput" label="Title:" className="mb-3">
            <Form.Control className='' required name="title" type="text" placeholder=""  value={formData.title} onChange={handleChange} />
        </FloatingLabel>
        

          {/* <label>Title:</label>
          <input type="text" name="title" className='form-control w-50 md: w-100 ' value={formData.title} onChange={handleChange} /> */}

        <FloatingLabel controlId="floatingInput" label="Description :" className="mb-3">
            <Form.Control as="textarea" required name="description" placeholder=""  value={formData.description}  onChange={handleChange} />
        </FloatingLabel>

        </div>
        <div className='my-10  p-3  border-2 whitesmoke rounded shadow '>

        <div className='flex '>
        <label htmlFor="checkbox_A" className='mr-2 small'>Ajouter des question sure l'ifrastricteur </label>
        <input  type="checkbox" id="checkbox_A"   name="ifrastricteur"  checked={formData.ifrastricteur}  onChange={(e) => setFormData({ ...formData, ifrastricteur: e.target.checked })}  />
        
        </div>
        {formData.ifrastricteur && (
        <div className='row '>
          <div className='col-4'>
              <label htmlFor="checkbox_A" className='mr-2 small'>Edication </label>
              <input  type="checkbox" checked={formData.questionPreDefinie.includes('Education')}
              onChange={() => handleCheckboxChange('Education')}/>
          </div>
          <div className='col-4'>
              <label htmlFor="checkbox_A" className='mr-2 small'>Santé et nutrition</label>
              <input  type="checkbox" checked={formData.questionPreDefinie.includes('Santé et nutrition')}onChange={() => handleCheckboxChange('Santé et nutrition')}/>
          </div>
          <div className='col-4'>
              <label htmlFor="checkbox_A" className='mr-2 small'>Hydraulique</label>
              <input  type="checkbox" checked={formData.questionPreDefinie.includes('Hydraulique')}onChange={() => handleCheckboxChange('Hydraulique')}/>
          </div>
          <div className='col-4'>
              <label htmlFor="checkbox_A" className='mr-2 small'>Equipements marchands</label>
              <input  type="checkbox" checked={formData.questionPreDefinie.includes('Equipements marchands')}onChange={() => handleCheckboxChange('Equipements marchands')}/>
          </div>
          <div className='col-4'>
              <label htmlFor="checkbox_A" className='mr-2 small'>Environnement, agriculture et élevage </label>
              <input  type="checkbox" checked={formData.questionPreDefinie.includes('Environnement, agriculture et élevage ')}onChange={() => handleCheckboxChange('Environnement, agriculture et élevage ')}/>
          </div> 
        </div>
        )}
          {/* <label>Description:</label>
          <textarea name="description"  className='form-control w-50 md: w-100 ' value={formData.description} onChange={handleChange}></textarea> */}
        </div>
        <div className='my-10  p-3 border-2   whitesmoke rounded shadow border'>
          <h3>Questions</h3>
          {formData.questions.map((question, index) => (
                        
            <div key={index} className='border-2 rounded p-3 m-2'>
            <div className='flex flex-wrap'>
              <div className='row w-100 flex flex-wrap sm:w-100'>
                    <div className="col-md-4 col-sm-6 col-lg-4">
                    <FloatingLabel controlId="floatingInput" label="text du question :" className="mb-3">
                      <Form.Control as="textarea" name="text" placeholder=""  value={question.text}  onChange={(e) => handleQuestionChange(index, e)} />
                  </FloatingLabel>
                  </div>  
                  <div className="col-md-4 col-sm-6 col-lg-4">
                <input type="text" className='form-control w-50  m-1' name="categorie" value={question.categorie} onChange={(e) => handleQuestionChange(index, e)} placeholder="categorie" />

                </div>
                <div className="col-md-4 col-sm-12 col-4">
              <FloatingLabel   controlId="floatingSelect" label="Type du reponse">
                <Form.Select name="type" aria-label="Floating label select example"  className=' w-25  m-1 sm: w-auto'value={question.type} onChange={(e) => handleQuestionChange(index, e)}>
                  <option value="text" className='w-25'>Text</option>
                  <option value="number">Nomber</option>
                  <option value="choices">Multiple Choices</option>
                  <option value="radio">Radio Choices</option>
                </Form.Select>
              </FloatingLabel>
                </div>    
            </div>
            <div className="col-md-12 col-sm-6 col-12">
            {question.type === 'choices' || question.type === 'radio' ? (
                <div className=''>
                  {question.choices.map((choice, choiceIndex) => (
                    <div key={choiceIndex}>
                      <input type="text" placeholder={`choix ${choiceIndex +1}`} className='form-control w-50  m-1 'style={{ '::placeholder': { color: 'red' } }} value={choice} onChange={(e) => {
                        const updatedQuestions = [...formData.questions];
                        updatedQuestions[index].choices[choiceIndex] = e.target.value;
                        setFormData({ ...formData, questions: updatedQuestions });
                      }} />
                    </div>
                  ))}
                  <center>
                    <button type="button" className='form-control w-75 bg-dark mt-2 text-light' onClick={() => {
                    const updatedQuestions = [...formData.questions];
                    updatedQuestions[index].choices.push('');
                    setFormData({ ...formData, questions: updatedQuestions });
                  }}>ajoutée une choix</button>
                  </center>
                </div>
              ) : null}
            </div>  
              </div>
              <div className=''>
              </div>
            </div>
          ))}
          <button type="button" className='btn btn-dark ml-2 text-light' onClick={addQuestion}>Add Question</button>
        </div>
        <center>
        <button type="submit" className='btn btn-dark text-light'>Soumetre</button>
        </center>
      </form>
    </div>
  );
}

export default CreateForm;
