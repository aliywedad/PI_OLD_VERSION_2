import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {   UserLoggedInCookie } from './Cookies';
import { TfiBackLeft } from "react-icons/tfi";
import { useForm } from 'react-hook-form';
import { APIs } from './APIs';
import Swal from 'sweetalert2';



function Repondre({ id ,setIdForm,villageInfo,setRender}) {
  const { register, handleSubmit, reset } = useForm();

  const [listInfra, setListInfra] = useState([]);
  const [listTypeInfra, setListTypeInfra] = useState([]);
  const [formData, setFormData] = useState([]);
  const [village, setVillage] = useState([]);
  const [commune, setCommune] = useState([]);
  const [moughataa, setMoughataa] = useState([]);
  const [wilaya, setWilaya] = useState([]);
  const [infrastructures, setInfrastructures] = useState([{ typeInfra: 0, fonctionnelles: 0, nonFonctionnelles: 0, total: 0 }]);
  const [idCommune, setIdCommune] = useState(0);
  const [idWilaya, setIdWilaya] = useState(0);
  const [idMoughataa, setIdMoughataa] = useState(0);
  const [idvillage, setidvillage] = useState(0);

  const [dataList, setDataList] = useState([]);
  const [DATA, setDATA] = useState([{ "infrastructures": infrastructures, "dataList": dataList }]);

  const anvoir = async (data) => {

    if(idvillage!==0){
      try {
        const response = await axios.post(APIs.ReamplireFormilaire, {
          // const response = await axios.post("APIs.ReamplireFormilaire", {
            infrastructures: infrastructures,
          dataList: data,
          village:idvillage,
          idUser:user.id
        });
        Swal.fire({
          title: " ",
          text: "Les données ont été insérées avec succès",
          icon: "success"
      });
      setIdForm(0)

        
      } catch (error) {
        console.error('Error creating form : ', error);
      }}
    
    };
  const onSubmit = async (data) => {
    // console.log(data)
    // console.log('the data of village:', idvillage);
    // console.log('infrastructures:', infrastructures);
    // console.log('reponses:', dataList);
    console.log("the data befor filter ",data)
    for (let i in data) {
      if (Array.isArray(data[i])) {
        console.log(data[i].join(', ')); 
        data[i]=data[i].join(', ')
        // Convert array to comma-separated string
      } else {
        console.log(data[i]);
      }
    }
    console.log("the data after filter ",data)

    anvoir(data)
  };

  const fetchData2 = async () => {
    try {
      const response = await fetch(APIs.lesVillages);
      const data = await response.json();
      setVillage(data);

      const response2 = await fetch(APIs.lesWilayas);
      const data2 = await response2.json();
      setWilaya(data2);

      const response3 = await fetch(APIs.lesMoghataas);
      const data3 = await response3.json();
      setMoughataa(data3);

      const response4 = await fetch(APIs.lesCommuns);
      const data4 = await response4.json();
      setCommune(data4);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAddGroup = () => {
    setInfrastructures([...infrastructures, { fonctionnelles: 0, nonFonctionnelles: 0, total: 0 }]);
  };

  const handleRemoveGroup = (index) => {
    const updatedInfrastructures = [...infrastructures];
    updatedInfrastructures.splice(index, 1);
    setInfrastructures(updatedInfrastructures);
  };

  const handleInfrastructureChange = (index, data) => {
    const updatedInfrastructures = [...infrastructures];
    updatedInfrastructures[index] = { ...data, total: data.fonctionnelles + data.nonFonctionnelles };
    setInfrastructures(updatedInfrastructures);
    setDATA({ "infrastructures": infrastructures, "dataList": dataList });
    // console.log("new data is ", DATA);
  };

  const url = APIs.lesInfosDuFormilaire;
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.post(url, { "id": id });
      console.log(response.data)
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchInfra = async () => {
    try {
      const response = await fetch(APIs.lesInfrastruture);
      const data = await response.json();
      setListInfra(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchTypeInfra = async () => {
    try {
      const response = await fetch(APIs.lesTypesInfra);
      const data = await response.json();
      setListTypeInfra(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if(villageInfo){
      setidvillage(villageInfo.idvillage)
    }
    fetchData();
  }, []);

  useEffect(() => {
    fetchTypeInfra();
    fetchInfra();
    setuser(UserLoggedInCookie);

  }, []);

  useEffect(() => {
    fetchData2();

  }, []);

  const classInput = 'border px-1 ml-4 bg-white-100 rounded'

  const groupQuestionsByCategory = (questions) => {
    const groupedQuestions = {};
    questions.forEach((question) => {
      const { categorie } = question;
      if (!groupedQuestions[categorie]) {
        groupedQuestions[categorie] = [];
      }
      groupedQuestions[categorie].push(question);
    });
    return groupedQuestions;
  };
  const [user, setuser] = useState({});
  useEffect(() => {
    setuser(UserLoggedInCookie);
     console.log("user is ",user)

  }, []);
  const handleAddInfrastructureData = (data) => {
    setDataList(prevDataList => [...prevDataList]);
  };


  return (
    <>
    <center>
    <h3  >Repondre Au Enregistrement</h3>

    </center>

    {/* <div className="overflow-x-auto myshadow border-2 text-nowrap sm:rounded-lg" style={{marginTop:'120px',marginLeft:'30px',marginBottom:'40px',marginRight:'30px'}}></div> */}
<div className='p-2  '  style={{marginTop:'120px',marginLeft:'20px',marginBottom:'40px',marginRight:'30px'}}>
  <h2><TfiBackLeft  onClick={()=>setIdForm(0)}/> </h2>
  <form onSubmit={handleSubmit(onSubmit)}>

      {formData.map((item) => (
        <div key={item.formulaire} className='w-full'>

          <div className='my-10  p-4   whitesmoke rounded shadow   w-full '>
            <p>Titre : {item.formilair}</p>
            <p>Description : {item.description}</p>
            <br />
             {/* if you alredy choisen the village  */}
            {villageInfo? <p>village = {villageInfo.nomAdministratif}</p>:
            // if not ! 
            (
              // div pour filtrer les village et les moughataa .........
              <div className='flex flex-column flex-md-row'>
              <FloatingLabel controlId="floatingSelect" className='mr-2' label="wilaya">
                <Form.Select name="type" className='  flex-grow-1'
                  onChange={(e) => setIdWilaya(parseInt(e.target.value))}
                >
                  <option>Choisissez la wilaya.</option>
                  {wilaya.map((item, index) => (
                    <option key={index} value={item.ID_wilaya}>{item.Nom_wilaya}</option>
                  ))}
                </Form.Select>
              </FloatingLabel>

              <FloatingLabel controlId="floatingSelect" className='mr-2' label="moughataa">
                <Form.Select name="type" className='  flex-grow-1'
                  onChange={(e) => setIdMoughataa(parseInt(e.target.value))}
                >
                  <option>Choisissez le moughataa.</option>
                  {idWilaya === 0 ? (
                    moughataa.map((item, index) => (
                      <option key={index} value={item.ID_maghataa}>{item.nom}</option>
                    ))
                  ) : (
                    
                      moughataa
                        .filter(item => item.codeWilaye === idWilaya)
                        .map((item, index) => (
                          <option key={index} value={item.ID_maghataa}>{item.nom}</option>
                        ))
                    )}
                </Form.Select>
              </FloatingLabel>

              <FloatingLabel controlId="floatingSelect" className='mr-2' label="Commune">
                <Form.Select
                  name="type"
                  className="flex-grow-1"
                  onChange={(e) => setIdCommune(parseInt(e.target.value))}
                >
                  <option disabled>Choisissez la commune.</option>
                  
                  {idMoughataa === 0 ? (
                    commune.map((item, index) => (
                      <option key={index} value={item.ID_commin}>
                        {item.nom}
                      </option>
                    ))
                  ) : (
                      commune
                        .filter(item => item.ID_maghataa === idMoughataa)
                        .map((item, index) => (
                          <option key={index} value={item.ID_commin}>{item.nom}</option>
                        ))
                    )}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingSelect" className='' label="village">
                <Form.Select name="village" className='flex-grow-1' onChange={(e)=>{setidvillage(parseInt(e.target.value))}} required>
                  <option value="">Choisissez le village.</option> 
 
                  {idCommune === 0 ? (
                    village.map((item, index) => (
                      <option key={index} value={item.idvillage}>{item.nomAdministratif}</option>
                    ))
                  ) : (
                      village
                        .filter(item => item.idCommin === idCommune)
                        .map((item, index) => (
                          <option key={index} value={item.idvillage}>{item.nomAdministratif}</option>
                        ))
                    )}
                </Form.Select>
              </FloatingLabel>
            </div>
            )
            }

             

          </div>
          {item.questions?.length > 0 && (
            <div>
              {Object.entries(groupQuestionsByCategory(item.questions)).map(([categorie, questions]) => (
                <div key={categorie} className='my-10  p-4   whitesmoke rounded shadow   w-full '>
                  <center><h4  >Les Questions</h4></center><br/>
  
        
        {/* <Form.Check className='m-2' label={'active?'} name="name" {...register("active")}      /> */}
        <table className='no-wrap w-100'>
                    {questions.map((question) => (
                      <tr className='' ><td className='px-1 py-2 no-wrap w-50'>{question.text} :</td>
                        <td className='pr-4  w-50'> 
                        {question.type !="text" && question.type !="number" ?
                        (  <Form.Select
                          
                          name="name"
                           
                          {...register(`${question.id}`, {
                            setValueAs: (values) => (Array.isArray(values) ? values.join(', ') : values)
                          })}
                          multiple={question.type === "choices"}
                          id={question.id}
                          className='m-2 select'
                        >
                          <option disabled>  {question.type === "choices" ? "Choisissez une réponse ou plusieurs. " : "Choisissez une  réponse."}  </option>
                          {JSON.parse(question.choices.replace(/'/g, '"')).map((item, index) => (
                            <option className='option' key={index} value={item}>
                              {item}
                            </option>
                          ))}
                        </Form.Select>
                        ):  
                          (<Form.Control  type={`${question.type}`} name="name"   {...register(`${question.id}`)}   className='m-2' placeholder="  " /> ) 
                           }
                        </td></tr>

                    ))}

                  </table>

                </div>
              ))}

            </div>

          )}

        </div>
      ))}
      <div className='my-10  p-4   whitesmoke rounded shadow   w-full '>
        <h3>Quantification des infrastructures du village</h3>
        <div className='infra'>
          <div>
            {infrastructures.map((infra, index) => (
              <InfrastructureGroup key={index} index={index} listInfra={listInfra} onChange={handleInfrastructureChange} onRemove={() => handleRemoveGroup(index)} onAddInfrastructureData={handleAddInfrastructureData} />
            ))}
            <Button variant="primary" onClick={handleAddGroup} className="mt-2 mr-4">Ajouter un autre groupe</Button>
            <Button variant="primary" onClick={() => { console.log("le donner du l'infrastructeur est : ", DATA); console.log("les donner du réponses est : ", dataList) }} className="mt-2">Terminé</Button>
          </div>
        </div>
      </div>
      <button type="submit" className='btn btn-primary mr-2'>Soumetre</button>
                </form>
      <center>
      {/* <input variant="primary" type='submit' onClick={()=>{anvoir()}}  value={'repondre'} className=" btn btn-primary mt-2"/> */}

      </center>

    </div>
    </>
  );
}

export default Repondre;

function InfrastructureGroup({ index, onChange, onRemove, listInfra, onAddInfrastructureData }) {
  const [fonctionnelles, setFonctionnelles] = useState('');
  const [nonFonctionnelles, setNonFonctionnelles] = useState('');
  const [typeInfra, setTypeInfra] = useState('');

 

  const handleAddInfrastructure = () => {
    const newInfrastructure = {
      typeInfra: typeInfra,
      fonctionnelles: fonctionnelles,
      nonFonctionnelles: nonFonctionnelles
    };
    onAddInfrastructureData(newInfrastructure);
    setFonctionnelles('');
    setNonFonctionnelles('');
    setTypeInfra('');
  };

  const handleInputChangeInfra = (e) => {
    const { name, value } = e.target;
    let parsedValue = parseInt(value);
  
    // Check if value is a valid number
    if (isNaN(parsedValue)) {
      parsedValue = 0;
    }
  
    if (name === 'Fonctionnelles') {
      setFonctionnelles(parsedValue);
    } else if (name === 'nonFonctionnelles') {
      setNonFonctionnelles(parsedValue);
    } else if (name === 'typeInfra') {
      setTypeInfra(parsedValue);
    }
  
    // Use parsedValue instead of value to ensure it's a number or 0
    const fonctionnellesValue = name === 'Fonctionnelles' ? parsedValue : fonctionnelles;
    const nonFonctionnellesValue = name === 'nonFonctionnelles' ? parsedValue : nonFonctionnelles;
    onChange(index, {
      typeInfra: typeInfra,
      fonctionnelles: fonctionnellesValue,
      nonFonctionnelles: nonFonctionnellesValue,
      total: fonctionnellesValue + nonFonctionnellesValue
    });
  };

  return (
    <div className='infra'>
      <div className='flex flex-column flex-md-row'>
        <FloatingLabel controlId="floatingSelect" label="Type de l'infrastructure">
          <Form.Select name="typeInfra" aria-label="Floating label select example" className='sm:w-auto flex-grow-1' value={typeInfra} onChange={handleInputChangeInfra}>
            <option value={''} disabled>Choisissez le type de l'infrastructure.</option>
            {listInfra.map((item, index) => (
              <option key={index} value={item.id}>{item.nom}  </option>
            ))}
          </Form.Select>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Fonctionnelles :" className="p-0 ml-2">
          <Form.Control type='number' min={0} name="Fonctionnelles" defaultValue={0} placeholder="" className='flex-grow-1' value={fonctionnelles} onChange={handleInputChangeInfra} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput"  label="Non Fonctionnelles :" className="ml-2">
          <Form.Control type='number' min={0} name="nonFonctionnelles" placeholder="" defaultValue={0} className='flex-grow-1' value={nonFonctionnelles} onChange={handleInputChangeInfra} />
        </FloatingLabel>
        <Button variant="danger"  className="ml-2" onClick={onRemove}>Supprimer</Button>
       </div>
      <br />
    </div>
  );
}
