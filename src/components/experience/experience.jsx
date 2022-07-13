import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id='experience'>
      <h5>Whats Experience i have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3><u>photography</u> </h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='logo'/>
             <div>
             <h4>Demande de mariage</h4>
              <small className='text-light'>EXperiend</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='logo'/>
             <div>
             <h4>Demande de mariage</h4>
              <small className='text-light'>EXperiend</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='logo'/>
             <div>
             <h4>Demande de mariage</h4>
              <small className='text-light'>EXperiend</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='logo'/>
              <div>
              <h4>Evenementiel</h4>
              <small className='text-light'>EXperiend</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='logo'/>
              <div>
              <h4>grossesse</h4>
              <small className='text-light'>EXperiend</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='logo'/>
              <div>
              <h4>photo de contenu</h4>
              <small className='text-light'>EXperiend</small>
              </div>
            </article>
          </div>

        </div>
        <div className="experience__backend">
          <h3>Design</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='logo'/>
              <div>
              <h4>Illustration</h4>
              <small className='text-light'>EXperiend</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='logo'/>
              <div>
              <h4>Illustration</h4>
              <small className='text-light'>EXperiend</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='logo'/>
              <div>
              <h4>Illustration</h4>
              <small className='text-light'>EXperiend</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='logo'/>
              <div>
              <h4>Illustration caricaturales</h4>
              <small className='text-light'>EXperiend</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='logo'/>
              <div>
              <h4>Webdesign</h4>
              <small className='text-light'>EXperiend</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='logo'/>
              <div>
              <h4>Edition Print</h4>
              <small className='text-light'>EXperiend</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default experience