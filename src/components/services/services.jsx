import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services_container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icons'/>
            <p>Identifications des principaux enjeux de la plateforme web </p>
            </li>
            <li>
            <BiCheck className='service__list-icons'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
            <BiCheck className='service__list-icons'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
            <BiCheck className='service__list-icons'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
            <BiCheck className='service__list-icons'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
            <BiCheck className='service__list-icons'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
          </ul>

        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>photoraphy</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icons'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
            <BiCheck className='service__list-icons'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
            <BiCheck className='service__list-icons'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
            <BiCheck className='service__list-icons'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
            <BiCheck className='service__list-icons'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
            <BiCheck className='service__list-icons'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
          </ul>

        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>web conception</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icons'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
            <BiCheck className='service__list-icons'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
            <BiCheck className='service__list-icons'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
            <BiCheck className='service__list-icons'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
            <BiCheck className='service__list-icons'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
            <BiCheck className='service__list-icons'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
          </ul>

        </article>
      </div>
    </section>
  )
}

export default services