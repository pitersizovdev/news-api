import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { getCategories, getNews } from '../../../api/apiNews';
import NewsList from '../../NewsList/NewsList';
import Pagination from '../../Pagination/Pagination';
import Categories from '../../Categories/Categories';

const Main = () => {
  const [news, setNews] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10
  const pageSizse = 10

  const fetchNews = async (currentPage) => {
    try {
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSizse,
        category: selectedCategory === 'All' ? null : selectedCategory
      });
      console.log(news)
      setNews(response.news);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories= async () => {
    try {
      const response = await getCategories();
      setCategories(['All', ...response.categories]);
      console.log(categories)
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory]);

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

      <Categories categories={categories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
      <NewsList news={news}/>
      <Pagination handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick} currentPage={currentPage} totalPages={totalPages}/>
    </main>
  );
};

export default Main;