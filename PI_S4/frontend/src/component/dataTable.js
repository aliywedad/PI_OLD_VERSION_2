
import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity ,faBuilding } from '@fortawesome/free-solid-svg-icons';
import { FaSearch } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";
import { BiAddToQueue } from "react-icons/bi";
import { MdLogout } from "react-icons/md";

function Sidebare(props) {
  return (
   
    <div className="layout-wrapper layout-content-navbar">
       
      <div className="layout-container">

        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
          <div className="app-brand demo">
            <a href="index.html" className="app-brand-link"></a>
          </div>
          <div className="menu-inner-shadow"></div>
          
          <div className="logo-container" style={{ marginTop: '-60px',marginBottom:'10px',marginLeft:'60px' }}>
            <img src={process.env.PUBLIC_URL + '/in.png'} alt="Logo" className="logo" style={{ width: '100px', height: '100px' }} />
          </div>
          <ul className="menu-inner py-1">
            <li className="menu-item active">
              <Link to='' className="menu-link" style={{ textDecoration: 'none' }}>
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Table de bord</div>
              </Link>
            </li>
            <li className="menu-item active" >
              <Link to='/WilayaList' className="menu-link" style={{ textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faCity} className="menu-icon" />
                <div data-i18n="Analytics">Wilaya</div>
              </Link>
            </li>
            <li className="menu-item active" >
              <Link to='/ListMaghataa' className="menu-link" style={{ textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faBuilding} className="menu-icon" />
                <div data-i18n="Analytics">Moughataa</div>
              </Link>
            </li>
            <li className="menu-item active" >
              <Link to='/forms' className="menu-link" style={{ textDecoration: 'none' }}>
              <GrDocumentPerformance />
             <div data-i18n="Analytics" className="ml-2">les formulaires</div>
              </Link>
            </li>
            <li className="menu-item active" >
              <Link to='/create_form' className="menu-link" style={{ textDecoration: 'none' }}>
              <BiAddToQueue />

                <div data-i18n="Analytics"className="ml-2">Crèer une formulaire</div>
              </Link>
            </li>
          </ul>
         
        </aside>
        <div className="layout-page">
          <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
          <div className="input-group">
            <div className="form-outline" data-mdb-input-init>
                <input type="search" id="form1" class="form-control"placeholder="search" />
              </div>
              <button type="button" class="btn btn-primary" data-mdb-ripple-init>
                   <FaSearch />
              </button>
              
           </div>
           {/* <div className="dropdown">
          <button className="btn btn-light dropdown-toggle p-0 m-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            les règions
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link to='/WilayaList'className="dropdown-item" style={{ textDecoration: 'none' }}>
                        <i className="menu-icon tf-icons bx bx-home-circle"></i>
                        <span data-i18n="Analytics">Table de bord</span>
                  </Link>   
                  <Link to='/WilayaList' className="dropdown-item" style={{ textDecoration: 'none' }}>
                     <FontAwesomeIcon icon={faCity} className="menu-icon" />
                    <span data-i18n="Analytics">Wilaya</span>
                  </Link> 
                  <Link to='/ListMaghataa' className="dropdown-item" style={{ textDecoration: 'none' }}>
                    <FontAwesomeIcon icon={faBuilding} className="menu-icon" />
                      <span data-i18n="Analytics">Moughataa</span>
                  </Link>   
                
            </div>
            
          </div>
          <div className="dropdown">
          <button className="btn btn-light dropdown-toggle p-0 m-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            les formulaires
          </button>
          <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
                  
                  <Link to='/forms' className="dropdown-item" style={{ textDecoration: 'none' }}>
                    <GrDocumentPerformance />
                    <span data-i18n="Analytics" className="ml-2">les formulaires</span>
                  </Link>
                  <Link to='/create_form' className="dropdown-item" style={{ textDecoration: 'none' }}>
                      <BiAddToQueue />
                      <span data-i18n="Analytics"className="ml-2">Crèer une formulaire</span>
                  </Link>
          </div>
        </div> */}
           <span className="mr-2">dèconnecter</span><MdLogout/>
          <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <ul className="menu-inner py-1">
                    {/* invisible nave */}
                </ul>
          </div>
          </nav>
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebare;
