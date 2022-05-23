import { useEffect, useMemo, useState } from 'react';
import { useHttpGet } from 'shared/hooks/useHttpGet';
import NewsInterface from 'models/NewsInterface';
import debounce from 'lodash.debounce';

export const useNewsList = () => {

  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [news, setNews] = useState< NewsInterface[] | null >(null);
  const [filteredNews, setFilteredNews] = useState< NewsInterface[] | null >(null);
  const [displayElements, setDisplayElements] = useState< number>(5);
  const {data, loading, httpGet} = useHttpGet<NewsInterface[]>();

  useMemo(() => {
    httpGet('news');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(data !== null){
      setNews(data)
    }
  }, [data])

  useEffect(() => {
    if(news !== null){
      let filteredNews = news.filter((el, index) => index < displayElements)
      setFilteredNews(filteredNews)
    }
  }, [news, displayElements])

  useEffect(() => {
    setDataLoading(loading)
  }, [loading])

  const loadMoreHandle = (e: React.MouseEvent<HTMLElement>) => {
    setDisplayElements(displayElements +2)
    if(news!== null && news.length > displayElements){
      setDisplayElements(displayElements +2)
    }
  }

  const debouncedloadMoreHandler = useMemo(
     () => debounce(loadMoreHandle, 300)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , [news,displayElements]);
  
return{ filteredNews, dataLoading, debouncedloadMoreHandler } 

}