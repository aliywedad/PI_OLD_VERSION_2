import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from "../component/Container";
import Side from "../component/Side";

function MaghataaParId() {
    const { id } = useParams();
    const url = "http://127.0.0.1:8000/list_Maghataa_parwilaya/";
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.post(url,{"id":id});
            console.log(response.data)
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const delet = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this item?');
        // Check if user confirmed
        if (confirmed) {
          // User confirmed, proceed with deletion logic
          // Put your deletion logic here
          try {
            const response = await axios.post('http://127.0.0.1:8000/suprimervillage/',{"id":id});
            console.log(response.data,"id = ",id)
            if(response.data==='200'){
              fetchData()
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
          console.log('Item deleted');
        } else {
          // User canceled, do nothing or show another message
          console.log('Deletion canceled');
        }
    
      };
    useEffect(() => {
        fetchData();
      }, []);
    // useEffect(() => {
        // fetchData(); // Fetch data when the component mounts
    // }); // Fetch data whenever the ID changes
     console.log(data)
     const M=data.moughata
    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">ID_Moughata</th>
            <th scope="col" className="px-6 py-3">Nom</th>
            <th scope="col" className="px-6 py-3">CodeWilaya</th>
          </tr>
        </thead>
        <tbody>
        {console.log(data.moughata)}
        {M?.map((dataObj) => (
            <tr onClick={() => console.log(dataObj.ID_maghataa)}>
                <td className="w-4 p-4">{dataObj.ID_maghataa}</td>
                <td className="w-4 p-4">{dataObj.Nom_maghataa}</td>
                <td className="w-4 p-4">{dataObj.ID_wilaya}</td>
            </tr> ))}
        </tbody>
    </table>
</div>
                      
        
        
    ); // Return the fetched data
}


export default MaghataaParId;
