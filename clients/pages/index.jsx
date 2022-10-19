
import React from 'react';
import Footer from '../public/components/Footer';
import HomeComponent from '../public/components/HomeComponent';
import NavBar from '../public/components/NavBar';
import HomePage from './HomePage';

const Index = () => {
  return (
    <div>
      <NavBar/>
        <HomePage/>
      <Footer/>
    </div>
  );
}

export default Index;
