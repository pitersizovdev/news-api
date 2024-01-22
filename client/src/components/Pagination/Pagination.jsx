import React from 'react';
import styles from './styles.module.css';

const Pagination = ({ totalPages, handleNextPage, handlePreviousPage, handlePageClick, currentPage }) => {
  return (
    <div className={styles.pagination}>
      <button onClick={handlePreviousPage} className={styles.arrow}>{'<'}</button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return <button disabled={index + 1 === currentPage} onClick={() => handlePageClick(index + 1)} className={styles.pageNumber} key={index}>{index + 1}</button>;
        })}
      </div>
      <button onClick={handleNextPage} className={styles.arrow}>{'>'}</button>
    </div>
  );
};

export default Pagination;
