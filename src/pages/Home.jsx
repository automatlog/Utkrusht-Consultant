import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'   
import Services from'../components/Services'
import Team from'../components/Team'
import Experience from'../components/Experience'
import Chooseus from'../components/Chooseus'
import Testimonial from'../components/Testimonial'
import Faq from'../components/Faq'

function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <Chooseus />
      <Experience />
      <Team />
      <Testimonial />
      <Faq />

    </div>
  )
}

export default Home