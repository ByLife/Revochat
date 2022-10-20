
import React, { useState } from 'react';
import Footer from '../public/components/Footer';
import NavBar from '../public/components/NavBar';
import HomePage from './HomePage';
import Home from '../public/components/Home';
import {Context} from './Context'
import AppPage from './AppPage'

const Index = () => {

  const [Auth, setAuth] = useState(false);
  return (
    <Context.Provider value={[Auth, setAuth]}>
        
          {/* <HomePage/> */}
          {Auth? 
            <AppPage/>

             :<>
             <HomePage/>
                {/* <NavBar/>
                <Home/>
                <Footer/> */}
              </>
      }
    </Context.Provider>
  );
}

export default Index;
