import React from 'react';
import styles from './styles.module.css';

const NewsItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <img src={item.image} alt='.' className={styles.image} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>by {item.author}</p>
      </div>
    </li>
  );
};

export default NewsItem;