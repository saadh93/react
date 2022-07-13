import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'
const contact = ()=> {
  return (
    <section id='contact'>
     <h5>get In Touch</h5>
     <h2>Contact Me</h2>
     <div className='container contact__container'>
     <div className='contact__options'>
     <article className='contact__option'>
      <MdOutlineEmail className='contact__option-icon'/>
      <h4>Email</h4>
      <h5> miguel_nogueira@hotmail.com</h5>
      <a href="mailto:miguel_nogueira@hotmail.com" target="_blank">Send a message</a>
      </article>
      <article className='contact__option'>
      <RiMessengerLine className='contact__option-icon'/>
      <h4>Messenger</h4>
      <h5> miguel_nogueira</h5>
      <a href="https://m.me/les-1001-clicks-de-miguel--e174889" target="_blank">Send a message</a>
      </article>
      <article className='contact__option'>
      <RiWhatsappLine className='contact__option-icon'/>
      <h4>Whatsap</h4>
      <h5> +34654345.....</h5>
      <a href="https://api.whatsapp.com/send?phone=+33651881924" target="_blank">Send a message</a>
      </article>
     </div>
     <form action=''>
      <input type="text" name='name' placeholder='your Full Name' required />
      <input type="email" name='email' placeholder='Your Email' required/>
      <textarea name="message" rows="7" placeholder='Your Message'></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
     </form>
     </div>

    </section>
  )
}

export default contact