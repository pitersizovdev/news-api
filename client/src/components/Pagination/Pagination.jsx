import React from 'react';
import styles from './styles.module.css';

const Pagination = ({ totalPages, handleNextPage, handlePreviousPage, handlePageClick, currentPage }) => {
  return (
    <div className={styles.pagination}>
      <button onClick={handlePreviousPage} className={styles.arrow}>{'<'}</button>
          <span className={styles.pageNumber}>{currentPage}</span>
      <button onClick={handleNextPage} className={styles.arrow}>{'>'}</button>
    </div>
  );
};

export default Pagination;
