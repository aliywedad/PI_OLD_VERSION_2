 
 import  React,{useState,useEffect} from 'react';
 import Button from 'react-bootstrap/Button';
 import Container from 'react-bootstrap/Container';
 import Form from 'react-bootstrap/Form';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
 import NavDropdown from 'react-bootstrap/NavDropdown';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faRightFromBracket  } from '@fortawesome/free-solid-svg-icons';
 import { Link } from 'react-router-dom';
 import Overlay from 'react-bootstrap/Overlay';
 import Popover from 'react-bootstrap/Popover';
 import { loggedInCookie, UserLoggedInCookie, Logout  } from '../component/Cookies';
 import { useNavigate } from 'react-router-dom';

 import { useMediaQuery } from 'react-responsive';
import VerificationLogin from './VerificationLogin';
import { TfiAngleDoubleRight,TfiAngleDoubleLeft } from "react-icons/tfi";
import { TfiShiftRightAlt ,TfiShiftLeftAlt} from "react-icons/tfi";
import profile from '../imeges/profile.png'
 export default function NavbarComponent({ toggle, setToggle }) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const [user, setuser] = useState({});
  const navigate = useNavigate();
 
  const [togglenav, setToggleNav] = useState(false); // Correction du nom de l'état
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
   
  useEffect(() => {
    setuser(UserLoggedInCookie);
    if (!UserLoggedInCookie()) {
      console.log("logged out")
      navigate('/');
    }

  }, []);
  // console.log("user " ,user)
  return (
    <>
    <VerificationLogin/>
      <header>
        <Navbar expand="lg" className="whitesmoke  border-1 text-black p-0" fixed="top"> {/* Correction de l'orthographe */}
          <Container fluid>
            <Navbar.Brand href="#">
              {/* <svg onClick={() => { setToggle(!toggle) }} className="w-5 h-5 center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg> */}
              {toggle?  <h1><TfiShiftRightAlt onClick={() => { setToggle(!toggle) }}  alt='' /></h1>
                :      <h1><TfiShiftLeftAlt onClick={() => { setToggle(!toggle) }}  alt='' /></h1>

              }
            </Navbar.Brand>

            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto pl-20 my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
              </Nav>
              <Nav
                className="me-auto pl-20 my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link>
                  <Link style={{ color: 'black', textDecoration: 'none' }} to={`/forms`}>Formulaires</Link>
                </Nav.Link>
                <Nav.Link href="DA/">
                  <Link style={{ color: 'black', textDecoration: 'none' }} to={`/DA`}>DA</Link>
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>

            </Navbar.Collapse>
              <img src={profile} class="rounded-circle img-fluid sm-imeg p-0 ml-3 " onClick={handleClick}  alt='' />
              <Overlay show={show} target={target} placement="bottom" containerPadding={20} className="p-0">
                <Popover id="popover-contained">
                <Popover.Header as="h3">{user.nom} {user.prenom}
                {/* logout icon and function */}
                <FontAwesomeIcon icon={faRightFromBracket} onClick={Logout(navigate)} className='ml-4' />
               
               
                 </Popover.Header>
                  <Popover.Body>
                  {user.email}
                  <br/> {user.role}  
                  <br/>
                  
                  </Popover.Body>
                </Popover>
              </Overlay>


            <Navbar.Toggle aria-controls="" >
            <svg   className="w-5 h-5 center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </Navbar.Toggle>

            </Container>
        </Navbar>
      </header>
    </>
  )
}



 