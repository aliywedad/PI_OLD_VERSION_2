import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState} from 'react'
import HomePage from './pages/HomePage';
import FormHomePage from './pages/FormHomePage';
import Login from './pages/login';
 import UsersPage from './pages/usersPage';
import Test from './component/test';
function App() {
  const [toggle, setToggle] = useState(true); 

  return (
<>
 
      <Routes>
        <Route path="/DA" element={<HomePage toggle={toggle} setToggle={setToggle} />} /> 
        <Route path="/users" element={<UsersPage toggle={toggle} setToggle={setToggle} />} />
        <Route path="/" element={<Login />} />
        <Route path="/forms" element={<FormHomePage toggle={toggle} setToggle={setToggle} />} />
        {/* <Route path="/test" element={<Test toggle={toggle} setToggle={setToggle} />} /> */}
 
       </Routes>
      </>
    // </BrowserRouter>
  );
}

export default App;
