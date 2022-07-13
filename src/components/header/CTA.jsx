import React from 'react'
import CV from '../../assets/waf5.pdf'


const CTA = ()=> {
  return (
    <div className="cta">
<a href={CV} download className='btn'>Download cv</a>
<a href="#contact" className='btn btn-primary'>lets talk</a>
        
    </div>
    )
   }
    

 export default CTA
