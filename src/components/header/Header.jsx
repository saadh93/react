import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/miguel.png'
import HeaderSocial from './HeaderSocials'
const header=()=> {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello Im</h5>
      <h1>mighel nogueira</h1>
      <h5 className="txt-light">Full stack developer</h5>
       <CTA/>
        <HeaderSocial/>
        <a href='#contact' className='scroll__down'>scroll down</a>
        <div className="me">
          <img src={ME} alt="me"/>
        </div>  
        
        </div>
       
       </header>
  )
}

export default header