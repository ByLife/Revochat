
import React from 'react';
import Footer from '../public/components/Footer';
import HomeComponent from '../public/components/HomeComponent';
import NavBar from '../public/components/NavBar';
import HomePage from './HomePage';
import Home from '../public/components/Home';

const Index = () => {
  return (
    <div>
      <NavBar/>
        <HomePage/>
        <Home/>
       <Footer/>
    </div>
  );
}

export default Index;
