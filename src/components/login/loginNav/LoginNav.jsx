import './LoginNav.scss';
import { Link } from 'react-router-dom';

export const LoginNav = () => {
  return (
    <section className='loginNavigation'>
      <header className='loginNavigation__header'>Dzień dobry</header>
      <Link to='/login'><button className='primary-button'>Zaloguj się</button></Link>
      <p>lub</p>
      <Link to='/rejestraction'><button className='secondary-button'>Zarejestruj</button></Link>
    </section>
  );
}