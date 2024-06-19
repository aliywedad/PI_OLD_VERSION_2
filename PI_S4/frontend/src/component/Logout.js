import { useNavigate } from 'react-router-dom';
import { UserLoggedInCookie,cookies } from './Cookies';

const Logout = () => {
  const navigate = useNavigate();
 
  cookies.remove('userData', { path: '/' });
  console.log("logged out")
  navigate('/');
  // Return null or some placeholder if you don't want this component to render anything
  return null;
}

export default Logout;
