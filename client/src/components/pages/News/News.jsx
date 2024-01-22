import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { getNews } from '../../../api/apiNews';
import NewsList from '../../NewsList/NewsList';

const Main = () => {

  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        console.log(news)
        setNews(response.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main>
      <NewsList news={news}/>
    </main>
  );
};

export default Main;