
import './TechnologiesList.scss';
import { TechnologiesListTab } from './TechnologiesListArray';
import { TechnologyItem } from '../technologyItem/TechnologyItem';

export const TechnologiesList = () => {
  return (
    <aside id='technologiesList' className='technologiesList'>
      <header className='technologiesList__header'>Nasze Technologie</header>
      <section className='technologiesList__elements'>
        {TechnologiesListTab.map((item, index) => <TechnologyItem key={item.id} item = {item}/>)}
      </section>
    </aside>
  );
}