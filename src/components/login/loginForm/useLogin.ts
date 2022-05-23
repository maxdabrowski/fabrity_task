import { useState } from 'react';
import LoginDataInterface from 'models/LoginDataInterface';
import ErrorLoginDataInterface from 'models/ErrorLoginDataInterface';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => { 
 
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginDataInterface>({user:'', password:''}); 
  const [loginError, setLoginError] = useState<ErrorLoginDataInterface>({user:true, password:true});
  const [saveSession, setSaveSession] = useState<boolean>(false);
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [tryToSend, setTryToSend] = useState<boolean>(false);

  const loginHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginData({...loginData, [e.target.name]: e.target.value});
      setLoginError({...loginError, [e.target.name]: e.target.value===''})
  }

  const checkboxHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSaveSession(!saveSession);
  }

  const visiblePasswordHandle = (e: React.MouseEvent<HTMLElement>) => {
    setVisiblePassword(!visiblePassword);
  }

  const loginSubmitHandle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setTryToSend(true);
    if(!loginError.user && !loginError.password){
      navigate('/login_success');
    }
  }

  return { loginData, saveSession, tryToSend, visiblePassword, loginHandle, checkboxHandle, visiblePasswordHandle, loginSubmitHandle } ;
}