import React from 'react';
import "./home.css";

const Social = () => {
  return (
    <div className='home__social'>
      <a 
      href="https://www.instagram.com/alifgunadi/?next=%2F" 
      className='home__social-icon'
      >
        <i className='uil uil-instagram'></i>
      </a>
      <a 
      href="https://www.linkedin.com/in/muhammad-alif-gunadi-276154266/" 
      className='home__social-icon'
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a 
      href="https://github.com/alifgunadi" 
      className='home__social-icon'
      >
        <i className='uil uil-github-alt'></i>
      </a>
    </div>
  )
}

export default Social
