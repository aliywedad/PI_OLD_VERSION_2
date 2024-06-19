import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './dataTable';
import { useParams } from 'react-router-dom';
function Commitparid() {
    const { id } = useParams();
    // const id  =1;
    const url = "http://127.0.0.1:8000/list_commun_parMough/";
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.post(url,{"id":1});
            console.log(response.data)
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
      }, []);

     console.log(data)
     const M=data.communs
    return (

        <Sidebar>
        <div className="card">
                        <h5 className="card-header">Liste Moughataa du "{data.Moughata}"</h5>
                        <div className="table-responsive text-nowrap">
                          <table className="table">
                            <thead>
                            <th >ID_commune </th>
                            <th >Nom</th>
                            <th >CodeMoghataa</th>
                            </thead>
                            <tbody className="table-border-bottom-0">
                                {console.log(data.moughata)}
                        {M?.map((dataObj) => (
                        <tr onClick={() => console.log(dataObj.ID_commune)} key={dataObj.id}>
                            <td >{dataObj.ID_commune}</td>
                            <td >{dataObj.Nom_commune}</td>
                            <td >{dataObj.ID_maghataa_id_id}</td>
                        </tr> ))}
            </tbody>
                          </table>
                        </div>
                      </div>
        
        </Sidebar>
        
    ); // Return the fetched data
}

export default Commitparid;
