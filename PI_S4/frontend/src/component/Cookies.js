import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

export const cookies = new Cookies();

// Define a custom hook to handle navigation
export const useVerificationLogin = () => {
  const navigate = useNavigate();

  const verificationLogin = () => {
    if (!UserLoggedInCookie()) {
      console.log("logged out")
      navigate('/');
    }
  }

  return verificationLogin;
}


 

export const loggedInCookie = (data) => {
  cookies.set('userData', data, { path: '/' });
};

export const UserLoggedInCookie = () => {
  return cookies.get('userData');
};

export const Logout = (navigate) => {
  const logout = () => {
    cookies.remove('userData', { path: '/' });
    console.log("logged out")
    navigate('/');
  }

  return logout;
}
 

