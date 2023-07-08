import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { ProgressBar } from 'react-loader-spinner';
import Skills from './components/skills/Skills';
import Project from './components/projects/Project';
import Footer from './components/footer/Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
          <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          wrapperClass="progress-bar-wrapper"
          borderColor="black"
          barColor="grey"
          className="progress-bar"
        />
      ) : (
        <>
          <Header />
          <main className='main'>
            <Home />
            <Skills />
            <Project />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
};

export default App;

