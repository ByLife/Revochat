import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import logo from '../assets/img/logo.png'

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
                <Link href='/'>
                <div className='logo'>
                    <img src={logo.src} alt="" />
                     Revochat
                </div>
                </Link>
                {/* <input className='search' type="text" placeholder='Search' /> */}
            </div>
            <div>
                <label className='switch'>
                    <input type="checkbox" onClick={toggleDarkMode}/>
                    <span className="slider"></span>
                </label>
                {/* <Link>
                    <span>Guide</span>
                </Link>
                <Link>
                    <span>Version</span>
                </Link>
                <Link>
                    <span>FAQ</span>
                </Link> */}

                <span>Guide</span>
                <span>Version</span>
                <span>FAQ</span>
                
                
            </div>
        </nav>
    );
}

export default NavBar;
