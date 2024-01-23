import React from 'react'
import styles from './styles.module.css'

const Header = () => {
  return (
    <header>
      <h1>Greenlist</h1>

      <nav>
        <ul className={styles.headerNav}>
            <li>Home</li>
            <li>News</li>
            <li>Exch</li>
            <button className={styles.headerBtn}>Profile</button>
        </ul>
      </nav>
    </header>
  )
}

export default Header