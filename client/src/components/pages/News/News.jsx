import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { getNews } from '../../../api/apiNews';
import NewsList from '../../NewsList/NewsList';
import Pagination from '../../Pagination/Pagination';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10
  const pageSizse = 10

  const [news, setNews] = useState([])

  const fetchNews = async (currentPage) => {
    try {
      const response = await getNews(currentPage, pageSizse);
      console.log(news)
      setNews(response.news);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

const handleNextPage =() =>{
  if(currentPage<totalPages){
    setCurrentPage(currentPage + 1)
  }
}
const handlePreviousPage =() =>{
  if(currentPage>1){
    setCurrentPage(currentPage - 1)
  }
}
const handlePageClick =(pageNumber) =>{
  setCurrentPage(pageNumber)
}


  return (
    <main className={styles.main}>
      <NewsList news={news}/>
      <Pagination handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick} currentPage={currentPage} totalPages={totalPages}/>
    </main>
  );
};

export default Main;