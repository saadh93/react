import React from 'react'
import './about.css'
import ME from '../../assets/miguel.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const about = () => {
  return (
    <section id='about'>
      <h5>Get to now</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icons'/>
             <h5>Experience</h5>
             <small>+10 years working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icons'/>
             <h5>clients</h5>
             <small>+1000 clients satisfy</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icons'/>
             <h5>Project</h5>
             <small>+60 completed</small>
            </article>
          </div>
          <p>
          Bonjour à tous,

Je m'appelle Miguel NOGUEIRA.

Passionné par la vie, les Arts, le graphisme, l'illustration, les voyages et la photographie.

Issu d'une formation en Art & Design et d'un début en Architecture que j'ai interrompu pour donner des ailes a une autre passion… le Monde de l'Aérien.

Après un BTS Tourisme et de nombreuses autres formations, j'ai travaillé pendant 20 ans dans ce monde fascinant de l'aviation où j'ai pu élargir et enrichir ma culture et visiter de nombreux pays. Pendant ce temps, j'ai continué à suivre des cours pour améliorer mes compétences en photographie, retouche photo et graphiste tout en travaillant dans ce domaine au même temps. Aujourd'hui, j'exerce toujours ces professions, mais je continue à m’actualiser et me former afin d’etre toujours au top du langage informatique et d’un Design perfectionné et innovant.

J'utilise toute la suite Adobe, Figma, Canva, Visual code, Wamp, HTML/CSS entre autres.

Je suis à votre service pour créer tous vos projets.

Pour en savoir plus...

je vous invite un explorateur et visitez mon site ;)

…

          </p>
          <a href="#contact" className='btn btn-primary'>lets Talk</a>
        </div>

      </div>
    </section>
  )
}

export default about