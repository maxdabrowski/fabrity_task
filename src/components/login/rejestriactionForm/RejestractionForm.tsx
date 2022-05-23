
import './RejestractionForm.scss';
import { useRegistration } from './useRegistration';
import { Link } from 'react-router-dom';
import { IoEyeSharp, IoEyeOffSharp  } from 'react-icons/io5';

export const RejestractionForm = () => {

  const { registrationData, registrationError, agree,visiblePassword, tryToSend, loginHandle, visiblePasswordHandle, checkboxHandle, loginSubmitHandle } = useRegistration();
  
  return (
    <section className='registrationForm'>
      <header className='registrationForm__header'>Zarejestruj się</header>
      <form>
        <div className='formSection'>
          <input className={!registrationData.user && tryToSend? 'formSection__input formSection__input--error':'formSection__input'} 
            type='text' placeholder=' ' name='user' value ={registrationData.user} onChange={loginHandle} />
          <label className='formSection__label'>Login</label>  
          <p className='formSection__error'>{registrationError.user && tryToSend ? 'pole nie może być puste' : null}</p>     
        </div>
        <div className='formSection'>
          <input className={!registrationData.password && tryToSend? 'formSection__input formSection__input--error':'formSection__input'}
            type={visiblePassword?'text':'password'} placeholder=' ' name='password' value ={registrationData.password} onChange={loginHandle} />
          <label className='formSection__label'>Hasło</label>  
          <span className='formSection__input--typeChange' onClick={visiblePasswordHandle}>{visiblePassword?<IoEyeSharp/>:<IoEyeOffSharp/>}</span>
          <p className='formSection__error'>{registrationError.password && tryToSend ? 'pole nie może być puste' : null}</p>     
        </div>
        <hr className='registrationForm__line'/>
        <div className='formSection'>
          <input className={!registrationData.name && tryToSend? 'formSection__input formSection__input--error':'formSection__input'}
            type='text' placeholder=' ' name='name' value ={registrationData.name} onChange={loginHandle} />
          <label className='formSection__label'>Imię i nazwisko</label>  
          <p className='formSection__error'>{registrationError.name && tryToSend ? 'pole nie może być puste' : null}</p>     
        </div>
        <div className='formSection'>
          <input className={!registrationData.mail && tryToSend? 'formSection__input formSection__input--error':'formSection__input'}
            type='text' placeholder=' ' name='mail' value ={registrationData.mail} onChange={loginHandle} />
          <label className='formSection__label'>Adres e-mail</label>  
          <p className='formSection__error'>{registrationError.mail && tryToSend ? 'pole nie może być puste' : null}</p>     
        </div>
        <div className='formSection__checkbox'>
          <input className='formSection__checkobox--input' type="checkbox" id='agree'  checked={agree}  onChange={checkboxHandle}/>
          <label className='formSection__checkbox--label' htmlFor="agree">Wyrażam zgodę na lorem ipsum lorem ipsum</label>
          <p className='formSection__checkbox--error'>{!agree && tryToSend ? 'pole nie może być puste' : null}</p>
        </div>
        <button className='primary-button' onClick={loginSubmitHandle}>Załóż konto</button>
        <Link to='/login'><p className='link'>Chcę się zalogować</p></Link>
      </form>
    </section>
  );
}