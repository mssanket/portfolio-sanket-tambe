import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Header />
      <Contact />
      <Banner />
      <About />
      <Services />
      <Expertise />
      <Footer />
    </>
  )
}

export default App
