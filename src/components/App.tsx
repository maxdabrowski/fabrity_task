import 'styles/main.scss';
import { Header } from './header/Header';
import { TechnologiesList } from './technologiesList/technolgiesList/TechnologiesList';
import { Footer } from './footer/Footer';
import { LoginSection } from './login/loginSection/LoginSection';
import { NewsList } from './newsList/newsList/NewsList';

export const App = () => {
  return (
    <div className='app'>
      <Header/>
      <LoginSection/>
      <NewsList/>
      <TechnologiesList/>
      <Footer/>
    </div>
  );
}