import TechnologieInterface from 'models/TechnologieInterface';
import { ReactComponent as HTML } from 'assets/technologies/HTML.svg';
import { ReactComponent as JavaScript } from 'assets/technologies/JavaScript.svg';
import { ReactComponent as NPM } from 'assets/technologies/NPM.svg';
import { ReactComponent as Webpack } from 'assets/technologies/Webpack.svg';

export const  TechnologiesListTab: TechnologieInterface[] = [
  {id:1, icon: Webpack, name:'Webpack', link:'https://webpack.js.org'},
  {id:2, icon:JavaScript, name:'JavaScript', link:'https://www.javascript.com'},
  {id:3, icon:NPM, name:'Node package Manager', link:'https://www.npmjs.com'},
  {id:4,  icon:HTML, name:'HTML', link:'https://html.spec.whatwg.org'},
];