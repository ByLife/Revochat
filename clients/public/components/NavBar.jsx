import React, { useEffect, useState } from 'react';


const NavBar = () => {
    
    const [body, setBody] = useState();

    useEffect(() => {
        setBody(document.querySelector('body'));
    }, []);

    const toggleDarkMode = () => {
        body.classList.toggle("dark");
     
    }

    
    return (
        <nav>
            <div>
                <span>Logo Revochat</span>
                <input className='search' type="text" placeholder='Search' />
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
