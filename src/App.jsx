
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Home from './components/Home'

function App() {

  return (
    <>
      <Header />
      <div id='home'></div>
      <Banner />
      <div id='about'></div>
      <About />
      <div id='skills'></div>
      <Services />
      <div id='portfolio'></div>
      <Expertise />
      <div id='contact'></div>
      <Contact />
      <Footer />
    </>
  )
}

export default App
