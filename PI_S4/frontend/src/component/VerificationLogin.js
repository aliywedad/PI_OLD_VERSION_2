import { useNavigate } from 'react-router-dom';
import { UserLoggedInCookie } from './Cookies';

const VerificationLogin = () => {
  const navigate = useNavigate();

  if (!UserLoggedInCookie()) {
    console.log("logged out")
    navigate('/');
  }

  // Return null or some placeholder if you don't want this component to render anything
  return null;
}

export default VerificationLogin;
