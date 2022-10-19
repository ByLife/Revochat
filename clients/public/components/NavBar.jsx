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
                <div className='logo'>
                    <img src="../assets/img/logo.jpg" alt="" />
                     Revochat
                </div>
                {/* <input className='search' type="text" placeholder='Search' /> */}
            </div>
            <div>
                <label className='switch'>
                    <input type="checkbox" onClick={toggleDarkMode}/>
                    <span className="slider"></span>
                </label>
                <span>Guide</span>
                <span>Version</span>
                <span>FAQ</span>
                
                
            </div>
        </nav>
    );
}

export default NavBar;
