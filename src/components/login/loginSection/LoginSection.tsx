import './LoginSection.scss';
import loginSectionImg from 'assets/loginSection/loginSectionImg.png'
import { Routes, Route} from 'react-router-dom';
import { LoginNav } from '../loginNav/LoginNav';
import { LoginForm } from '../loginForm/LoginForm';  
import { RejestractionForm } from '../rejestriactionForm/RejestractionForm';  
import { LoginSuccess } from '../loginSuccess/LoginSuccess';

export const LoginSection = () => {
  return (
    <section className='loginSection'>
      <figure>
        <img src={loginSectionImg} alt='Login Section'/>
      </figure>
      <aside className='loginSection__form'>
        <Routes>
          <Route path='/' element={<LoginNav/>} />
          <Route path='login' element={<LoginForm />} />
          <Route path='rejestraction' element={<RejestractionForm />} />
          <Route path='login_success' element={<LoginSuccess />} />
          <Route path='*' element={<LoginNav/>} />
        </Routes>
      </aside>
    </section>
  );
}