import React from 'react'
import ContactForm from '../Components/Emailme';
import Footer from '../Components/Footer';
import LandingPage from '../Components/LandingPage'
import ParallaxSection from '../Components/ParallaxSection'
import Projects from '../Components/Projects';
import SkillsShowcase from '../Components/SkillsShowcase';
import MusicPlayer from '../Components/MusicPlayer';

function Home() {
  return (
    <>
      <ParallaxSection/>
      <MusicPlayer/>
      <LandingPage/>
      <SkillsShowcase/>
      <Projects/>
      <ContactForm/>
      <Footer/>

    </>
  )
}

export default Home