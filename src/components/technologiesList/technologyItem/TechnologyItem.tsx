import './TechnologyItem.scss';
import TechnologieInterface from 'models/TechnologieInterface';

interface TechnologyItemProps {
  item: TechnologieInterface;
}

export const TechnologyItem = ({item}:TechnologyItemProps) => {

  return (
    <section className='technologyItem'>
      <a rel='noreferrer' href={item.link} target='_blank'>
        <p className='technologyItem__icon'><item.icon/></p>
        <hr className='technologyItem__line'/>
        <p className='technologyItem__name'>{item.name}</p>
      </a>
    </section>
  );
}