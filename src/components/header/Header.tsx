
import './Header.scss';
import { ReactComponent as TitleSvg } from 'assets/header/title.svg';
import { HashLink } from 'react-router-hash-link';
import { IoMenu, IoClose } from 'react-icons/io5';
import { useState } from 'react';

export const Header = () => {

  const [visbleMenu, setVisibleMenu] = useState(true);

  const visiblePasswordHandle = (e: React.MouseEvent<HTMLElement>) => {
    setVisibleMenu(!visbleMenu);
  }

  return (
    <div className='header'>
      <header className='header__tittle'><TitleSvg/> <span className='header__tittle--visible'>Front-End</span></header>
      <p className='header__nav--visible'onClick={visiblePasswordHandle}>{visbleMenu?<IoMenu/>:<IoClose/>}</p>
      <nav className={!visbleMenu?'header__nav':'header__nav--hide'}>
        <div className='header__nav--element'>
          <p className='header__link'><HashLink className='header__link--redirect' smooth to={'#newsList'}>Wiadomości</HashLink> </p>
          <hr className='header__link--underline'></hr>
        </div>
        <div className='header__nav--element'>
          <p className='header__link'><HashLink className='header__link--redirect' smooth to={'#technologiesList'}>Technologie</HashLink></p>
          <hr className='header__link--underline'></hr>
        </div>
      </nav>
    </div>
  );
}