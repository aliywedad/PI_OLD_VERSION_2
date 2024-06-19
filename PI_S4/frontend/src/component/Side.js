import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { GrDocumentPerformance } from "react-icons/gr";
import { BiAddToQueue } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { BsHouseDoor } from "react-icons/bs";
import logo from '../imeges/logoSista.png';
import rimmap from '../imeges/kk.png';
import usersLogo from '../imeges/users.png';
import formlogo from '../imeges/formLogo.png';

export default function Side({ toggle, setToggle }) {

  const handleLogout = () => {
    setToggle(false);
  };

  return (
    <aside  className={`fixed top-0 left-0 z-40 w-64 h-screen mt-4  ${toggle ? " hidden w-50 " : ""}`}  >
      <div className="h-full px-3 py-4 overflow-y-auto    whitesmoke border-2 ">
        
        <ul className="mt-10 space-y-3 font-medium w-fit text-wrap">

           <li>
           {/* <div className='sm-imeg-logo-div'>
          <img src={logo} className='sm-imeg-logo' alt="Logo" />

          </div> */}
           </li>
          <li style={{ color: 'black' }}>
            <Link to='/DA' className=" " style={{ textDecoration: 'none' ,color: 'black'}}>
                
              <div>
              <img src={rimmap} alt='' className='sm-imeg-sidbar p-0'/>    <p className='p-0 '> Division adminstrative</p>
              </div>
            </Link>
          </li>
 
          <li style={{ color: 'black' }}>
            <Link to='/forms' className=" " style={{ textDecoration: 'none',color: 'black' }}>
              
              {/* <div data-i18n="Analytics" className="ml-2"><h2><GrDocumentPerformance /></h2></div> */}
              <div>
              <img src={formlogo} alt='' className='sm-imeg-sidbar p-0'/>    <p className='p-0 '> Les Formulaires </p>
              </div>
            </Link>
          </li>


          <li style={{ color: 'black' }}>
            <Link to='/users' className=" " style={{ textDecoration: 'none',color: 'black' }}>
            <div>
              <img src={usersLogo} alt='' className='sm-imeg-sidbar p-0'/>    <p className='p-0 '>Gestion des utilisateurs</p>
              </div>
             </Link>
          </li>

{/* 
          <li style={{ color: 'black' }}>
            <button onClick={handleLogout} className=" " style={{ textDecoration: 'none', cursor: 'pointer' ,color: 'black'}}>
              <MdLogout />
              <div data-i18n="Analytics" className="ml-2">Déconnexion</div>
            </button>
          </li> */}
        </ul>
      </div>
    </aside>
  );
}
