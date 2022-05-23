import './NewsList.scss';
import { NewsItem } from '../newsItem/NewsItem';
import { useNewsList } from './useNewsList';
import  Loader  from 'shared/components/Loader/Loader'
import { IoReload } from 'react-icons/io5';

export const NewsList = () => {

  const { filteredNews, debouncedloadMoreHandler } = useNewsList();

  return (
    <main className='newsList' id='newsList'> 
      <header className='newsList__header'>Wiadomości</header>
      <section className='newsList__elements'>
        {filteredNews !== null ? filteredNews.map((item) => <NewsItem key={item.date} item = {item}/>):<Loader/>}
      </section>
      <p className='newsList__elements--load' onClick={debouncedloadMoreHandler}>Załaduj więcej <IoReload/></p>
    </main>

  );
}