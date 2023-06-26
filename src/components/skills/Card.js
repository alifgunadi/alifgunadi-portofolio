import React from 'react';
import './skills.css';
import ReactJS from '../../images/react.png';
import ExpressJS from '../../images/express.png';
import Javascript from '../../images/javascript.png';
import NodeJS from '../../images/nodejs.png';
import MongoDB from '../../images/mongodb.png';
import HTML from '../../images/html.png';
import CSS from '../../images/css.png';


const Card = () => {
  return (
    <div className="card">
      <div className="card-sixth">
        <img src={HTML} alt="Gambar" className='image--card-html' />
        <div className="card-body">
          <h6 className="card-title">&nbsp;&nbsp;HTML&nbsp;&nbsp;</h6>
        </div>
      </div>
      <div className="card-seventh">
        <img src={CSS} alt="Gambar" className='image--card-css' />
        <div className="card-body">
          <h6 className="card-title">&nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;</h6>
        </div>
      </div>
      <div className="card-third">
        <img src={Javascript} alt="Gambar" className='image--card-js' />
        <div className="card-body">
          <h6 className="card-title">Javascript</h6>
        </div>
      </div>
      <div className="card-forth">
        <img src={NodeJS} alt="Gambar" className='image--card-node'/>
        <div className="card-body">
          <h6 className="card-title">NodeJS</h6>
        </div>
      </div>
      <div className="card-primary">
        <img src={ReactJS} alt="Gambar" className='image--card-react'/>
        <div className="card-body">
          <h6 className="card-title">ReactJS</h6>
        </div>
      </div>
      <div className="card-second">
        <img src={ExpressJS} alt="Gambar" className='image--card-express' />
        <div className="card-body">
          <h6 className="card-title">ExpressJS</h6>
        </div>
      </div>
      <div className="card-fifth">
        <img src={MongoDB} alt="Gambar" className='image--card-mongodb'/>
        <div className="card-body">
          <h6 className="card-title">MongoDB</h6>
        </div>
      </div>
      
    </div>
  );
};

export default Card;
