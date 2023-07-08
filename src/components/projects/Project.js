import React, { useState, useEffect } from 'react';
import WebHome from '../../images/ecommerce1.png';
import WebPage from '../../images/ecommerce2.png';
import WebPage2 from '../../images/ecommerce3.png';
import WebPage3 from '../../images/ecommerce4.png';
import WebPage4 from '../../images/ecommerce5.png';
import CRUD from '../../images/CRUD.png';
import PointOfSales from '../../images/pointOfSales.png';
import Project2 from '../../images/project2.png';
import Project2category from '../../images/project2category.png';
import Project2trending from '../../images/projetc2trending.png';
import Project2footer from '../../images/projetc2footer.png';
import './project.css';

const Project = () => {
  const images = [WebHome, WebPage, WebPage2, WebPage3, WebPage4, CRUD, PointOfSales];
  const images2 = [Project2, Project2category, Project2footer, Project2trending];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setImageIndex((prevIndex) => (prevIndex + 1) % images2.length);
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className='container'>
      <h1 className='section__title'>Projects</h1>
      <div className='section__subtitle'>
        <div className='card-project'>
          <a href='https://github.com/alifgunadi/MERN.git' className='slide-link'>
            <img src={images[currentImageIndex]} alt='Ecommerce' className='slide-image' />
            <h4 className='home__subtitle'>Ecommerce Full-Stack</h4>
          </a>
          <a href='https://github.com/alifgunadi/frontend-react.git' className='slide-link'>
            <img src={images2[imageIndex]} alt='Frontend' className='slide-image' />
            <h4 className='home__subtitle'>Front End</h4>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Project;
