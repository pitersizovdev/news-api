import React from 'react'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1>Greenlist</h1>

      <nav>
        <ul className={styles.footerNav}>
            <li>GitHub</li>
            <li>Telergram</li>
            <li>Contacts</li>
        </ul>
      </nav>

      <h5>© Sizov Piter 2024</h5>
    </div>
  )
}

export default Footer