import { useState } from 'react';
import RegistrationDataInterface from 'models/RegistrationDataInterface';
import ErrorRegistrationDataInterface from 'models/ErrorRegistrationDataInterface';
import { useNavigate } from 'react-router-dom';

export const useRegistration = () => { 
 
  const navigate = useNavigate();
  const [registrationData, setregistrationData] = useState<RegistrationDataInterface>({user:'', password:'', name:'', mail:''}); 
  const [registrationError, setregistrationError] = useState<ErrorRegistrationDataInterface>({user:true, password:true, name:true, mail:true});
  const [agree, setAgree] = useState<boolean>(false);
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [tryToSend, setTryToSend] = useState<boolean>(false);

  const loginHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setregistrationData({...registrationData, [e.target.name]: e.target.value});
    setregistrationError({...registrationError, [e.target.name]: e.target.value===''})
  }

  const checkboxHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgree(!agree);
  }

  const visiblePasswordHandle = (e: React.MouseEvent<HTMLElement>) => {
    setVisiblePassword(!visiblePassword);
  }

  const loginSubmitHandle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setTryToSend(true)
    const areFalse = Object.values(registrationError).every(value => value === false);
    if(areFalse && agree ){
      navigate('/login_success');
    }
  }
  
  return { registrationData, registrationError, agree,visiblePassword, tryToSend, loginHandle, checkboxHandle,visiblePasswordHandle, loginSubmitHandle } ;
}