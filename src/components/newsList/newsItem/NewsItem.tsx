import './NewsItem.scss';
import NewsInterface from 'models/NewsInterface';
import { ReactComponent as NewsTitleSvg } from 'assets/news/newsTitle.svg';
import { useEffect, useState } from 'react';

interface NewsItemProps {
  item: NewsInterface;
}

export const NewsItem = ({item}:NewsItemProps) => {

  const [dateTime, setDateTime] = useState('');
  
  useEffect(() =>{
    const itemDate = new Date(item.date);
    const date = itemDate.toLocaleDateString();
    const time = itemDate.toLocaleTimeString([], {timeStyle: 'short'});
    setDateTime(`${date} ${time}`)
  },[item.date])


  return (
    <section className='newsItem'>
      <header className='newsItem__title'><p className='newsItem__title--icon'><NewsTitleSvg/></p> <p className='newsItem__title--text'>{item.title}</p></header>
      <p className='newsItem__date'>Data dodania: {dateTime}</p>
      <figure>
        {<img src={item.image} alt='Login Section'/>}
      </figure>
      <p className='newsItem__text'>{item.text}</p>
    </section>
  );
}