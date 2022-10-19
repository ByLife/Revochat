import React, { useEffect, useState } from 'react';


const NavBar = () => {
    

    // const inoput = document.querySelector('input');
    const body = document.querySelector('body');

    const toggleDarkMode = () => {
        body.classList.toggle("dark");
     
    }

    
    return (
        <nav>
            <div>
                <span>Logo Revochat</span>
                <input type="text" placeholder='Search' />
            </div>
            <div>
                <label className='switch'>
                    <input type="checkbox" onClick={toggleDarkMode}/>
                    <span className="slider"></span>
                </label>
                <span>Guide</span>
                <span>Version</span>
                <span>Nous contacter</span>
                
                
            </div>
        </nav>
    );
}

export default NavBar;
