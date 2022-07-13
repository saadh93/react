import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experiences from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Foter from './components/Footer/Footer'

const app = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experiences/>
    <Services/>
    
    <Testimonials/>
    <Contact/>
    <Foter/>
    </>
  )
}

export default app