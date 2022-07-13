import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avtr1.jpg'
import AVTR2 from '../../assets/avtr2.jpg'
import AVTR3 from '../../assets/avtr3.jpg'
import AVTR4 from '../../assets/avtr4.jpg'
// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data=[
  {
    avatar: AVTR1,
    name:'khaled',
    review:'Nous avons pas l’habitude des faire des shooting et Miguel nous a bien guidés, il est patient et très à l’écoute Les photos étaient merveilleuses, très bon photographe, absolument à recommander sans regret ni hésitation'
  },
  {
    avatar: AVTR2,
    name:'ibtissam',
    review:'Une année compliqué, je me suis mariée le 31 octobre 2020 après 2 reports. Heureusement que notre photographe Miguel, super compréhensible, a bien voulu répondre à nos attentes. Il est vraiment très professionnel, souriant, aimable.'
  },
  {
    avatar: AVTR3,
    name:'Bouchra',
    review:'Professionnel, à l’écoute mais surtout patient. Nous avons eu que des reports avec le covid. Merci à Miguel.'
  },
  {
    avatar: AVTR4,
    name:'Tara',
    review:'Bonjour à tous, je vous recommande ce photographe, très à l’écoute, il nous a mis à l’aise, il a su nous faire d’excellentes photos et nous guider. Nos familles l’ont adoré car il est très patient, souriant puis la qualité de ses photos est incroyable.'
  },
]
const testimonials = ()=> {
  return (
    <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container' 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      
      >
        {
          data.map(({avatar,name,review}, index)=>
          {
            return(
              <SwiperSlide key={index} className='testimonial'>
          <div className='client__avatar'>
          <img src={avatar} />
          </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__Review'>{review}</small>

          </SwiperSlide>
            )
          }
          )
        }
    
      </Swiper>
    </section>
  )
}

export default testimonials