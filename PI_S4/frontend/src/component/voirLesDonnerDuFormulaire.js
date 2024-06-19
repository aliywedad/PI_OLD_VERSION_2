import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import { TfiBackLeft } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { APIs } from './APIs';

function VoirLesDonnerDuFormilaire({ idvillage, nomAdministratifier, onClose }) {
  const [forms, setForms] = useState([]);
  const [villages, setVillages] = useState([]);
  const [data, setFormData] = useState([]);
  const [selected, setSelected] = useState({});
  const [searchCommune, setSearchCommune] = useState('');
  const [searchMoghataa, setSearchMoghataa] = useState('');
  const [searchwilaya, setSearchwilaya] = useState('');
  const [searchVillage, setSearchVillage] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [searchuser, setsearchuser] = useState('');

  const fetchFormsData = async () => {
    try {
      const response = await fetch(APIs.lesFormilaires);
      const data = await response.json();
      setForms(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchVillagesData = async () => {
    try {
      const response = await fetch(APIs.lesVillages);
      const data = await response.json();
      setVillages(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(APIs.lesResultatDuFormilaire, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Success:', responseData);
      setFormData(responseData);
      console.log(responseData)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchFormsData();
    fetchVillagesData();
    const savedSelected = JSON.parse(localStorage.getItem('selectedRecords'));
    if (savedSelected) {
      setSelected(savedSelected);
    }
  }, [idvillage]);

  useEffect(() => {
    fetchData();
  }, []);

  const filterByCriteria = (item) => {
    return (
      (!searchCommune || item.commune.toLowerCase().includes(searchCommune.toLowerCase())) &&
      (!searchMoghataa || item.moghataa.toLowerCase().includes(searchMoghataa.toLowerCase())) &&
      (!searchwilaya || item.wilaya.toLowerCase().includes(searchwilaya.toLowerCase())) &&
      (!searchVillage || item.village.toLowerCase().includes(searchVillage.toLowerCase())) &&
      (!searchuser || item.user.toLowerCase().includes(searchuser.toLowerCase())) &&
      (!searchDate || item.Date .includes(searchDate))
    );
  };

  const filterData = () => {
    return data.map(info => ({
      ...info,
      questions: info.questions.filter(filterByCriteria),
    })).filter(info => info.questions.length > 0);
  };

  return (
    <>
      <center>
      <h3>
        Données des Enregistrements
      </h3>
        </center>
      <div className="overflow-x-auto m-4 whitesmoke colorbackground myshadow border-2 text-n owrap sm:rounded-lg"  >
        {idvillage ? (
          <h1 style={{ marginLeft: '20px', marginTop: '20px', color: 'black' }}>
            <Link to="#" onClick={onClose} style={{ textDecoration: 'none', color: 'black' }}>
              <TfiBackLeft alt="" />
            </Link>
          </h1>
        ) : (
          <div>
            <h1 style={{ marginLeft: '20px', marginTop: '20px', color: 'black' }}>
              <Link to="/forms" onClick={onClose} style={{ textDecoration: 'none', color: 'black' }}>
                <TfiBackLeft alt="" />
              </Link>
            </h1>
          </div>
        )}
        <div className='container p-4 flex'>
        <Form.Control className='m-1 border-1 w-25 shadow rounded' placeholder=' ..wilaya' value={searchwilaya} onChange={(e) => setSearchwilaya(e.target.value)} />
        <Form.Control className='m-1 border-1 w-25 shadow rounded' placeholder=' ..moghataa' value={searchMoghataa} onChange={(e) => setSearchMoghataa(e.target.value)} />
          <Form.Control className='m-1 border-1 w-25 shadow rounded' placeholder='..commune' value={searchCommune} onChange={(e) => setSearchCommune(e.target.value)} />
          <Form.Control className='m-1 border-1 w-25 shadow rounded' placeholder='..village' value={searchVillage} onChange={(e) => setSearchVillage(e.target.value)} />
          <Form.Control className='m-1 border-1 w-25 shadow rounded' placeholder='..date' value={searchDate} onChange={(e) => setSearchDate(e.target.value)} />
          <Form.Control className='m-1 border-1 w-25 shadow rounded' placeholder='..user' value={searchuser} onChange={(e) => setsearchuser(e.target.value)} />
        </div>
        <div className="overflow-x-auto colorbackground   border-2 text-n owrap sm:rounded-lg" style={{ marginTop: '30px', marginLeft: '30px', marginBottom: '40px', marginRight: '30px' }}>
          {filterData().map((info, index) => (
            <React.Fragment key={index}>
              <div className='table-responsive'>
                {info.questions.map((item, questionIndex) => (
                  <Accordion alwaysOpen className='text-wrap m-4' key={questionIndex}>
                    <Accordion.Item eventKey={questionIndex.toString()}>
                      <Accordion.Header
                        style={{
                          backgroundColor: selected[`${index}-${questionIndex}`] ? '#D3D3D3' : 'transparent'
                        }}
                      >
                        <DropdownButton
                          align="end"
                          title={" "}
                          id="dropdown-menu-align-end"
                          variant="light">
                          <Dropdown.Item key={index} eventKey={index}> maitre recomandu </Dropdown.Item>
                        </DropdownButton>
                        {item.id_formulaire} {item.Date} par {item.user} |wilaya : {item.wilaya} | moghataa : {item.moghataa} | commune : {item.commune} | village : {item.village}
                      </Accordion.Header>
                      <Accordion.Body>
                        <table>
                          {item.data.map((dataItem, dataIndex) => (
                            <React.Fragment key={dataIndex}>
                              <tr>
                                <td>{dataItem.question} :</td><td><strong>{dataItem.reponse}</strong></td>
                              </tr>
                            </React.Fragment>
                          ))}
                        </table>

                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default VoirLesDonnerDuFormilaire;
