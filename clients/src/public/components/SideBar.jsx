import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../../pages/Context';

const SideBar = () => {

    const [Auth, setAuth] = useContext(Context);
    const [body, setBody] = useState();

    useEffect(() => {
        setBody(document.querySelector('body'));
    }, []);

    const toggleDarkMode = () => {
        body.classList.toggle("dark");
     
    }

    const Logout = () => {
        setAuth(false);
    }
    return (
        <div className="sidebar">
            <label className='switch'>
                    <input type="checkbox" onClick={toggleDarkMode}/>
                    <span className="slider"></span>
            </label>
            <button type='button'><ion-icon name="home-outline"></ion-icon></button>
            <button type='button'><ion-icon name="people-outline"></ion-icon></button>
            <button type='button'><ion-icon name="person-add-outline"></ion-icon></button>


            <button className='btn_logout' type='button' onClick={Logout} ><ion-icon name="log-out-outline"></ion-icon></button>

            
            
        </div>
    );
}

export default SideBar;
