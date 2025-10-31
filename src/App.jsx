import './App.css'
import ContactForm from './Components/Emailme';
import Footer from './Components/Footer';

import LandingPage from './Components/LandingPage'
import ParallaxSection from './Components/ParallaxSection'
import Projects from './Components/Projects';
import SkillsShowcase from './Components/SkillsShowcase';


function App() {


  return (
    <>
      <ParallaxSection/>
      <LandingPage/>
      <SkillsShowcase/>
      <Projects/>
      <ContactForm/>
      <Footer/>

    </>
  )
}

export default App
