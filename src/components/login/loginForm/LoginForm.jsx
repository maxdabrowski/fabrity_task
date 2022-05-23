
import './LoginForm.scss';
import { Link } from 'react-router-dom';
import { useLogin } from './useLogin';
import { IoEyeSharp, IoEyeOffSharp  } from 'react-icons/io5';

export const LoginForm = () => {

  const { loginData, saveSession, tryToSend, visiblePassword, loginHandle, checkboxHandle, visiblePasswordHandle, loginSubmitHandle } = useLogin();

  return (
    <section className='loginForm'>
      <header className='loginForm__header'>Zaloguj się</header>
      <form>
        <div className='formSection'>
          <input className={!loginData.user && tryToSend? 'formSection__input formSection__input--error':'formSection__input'} 
            type='text' placeholder=' ' name='user' value ={loginData.user} onChange={loginHandle} />
          <label className='formSection__label'>Login</label>  
          <p className='formSection__error'>{!loginData.user && tryToSend ? 'pole nie może być puste' : null}</p>     
        </div>
        <div className='formSection'>
          <input className={!loginData.password && tryToSend? 'formSection__input formSection__input--error':'formSection__input' } 
            type={visiblePassword?'text':'password'} placeholder=' ' name='password' value ={loginData.password} onChange={loginHandle} />
          <label className='formSection__label'>Hasło</label>  
          <span className='formSection__input--typeChange' onClick={visiblePasswordHandle}>{visiblePassword?<IoEyeSharp/>:<IoEyeOffSharp/>}</span>
          <p className='formSection__error'>{!loginData.password && tryToSend ? 'pole nie może być puste' : null}</p>     
        </div>
        <div className='formSection__switch'>
            <input className='formSection__switch--input'  name='switch' type="checkbox"  checked={saveSession}  onChange={checkboxHandle}/>
            <label className='formSection__switch--label' htmlFor="switch"></label>
            <span >Zapamiętaj moją sesję</span>
        </div>
        <button className='primary-button' onClick={loginSubmitHandle}>Dalej</button>
        <Link to='/rejestraction'><p className='link'>Nie mam konta</p></Link>
      </form>
    </section>
  );
}