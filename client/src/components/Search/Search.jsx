import React from 'react'
import styles from './styles.module.css'

const Search = ({keywords, setKeywords}) => {
  return (
    <div className={styles.Search}>
      <input onChange={(e)=>setKeywords(e.target.value)} type='text' value={keywords} className={styles.input} placeholder='Search...'/>
    </div>
  )
}

export default Search