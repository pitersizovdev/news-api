import React from "react"
import Header from "./components/Header/Header"
import News from "./components/pages/News/News"
import styles from './styles.module.css'
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div className={styles.container}>
      <Header/>
      <News/>
      <Footer/>
    </div>
  )
}

export default App