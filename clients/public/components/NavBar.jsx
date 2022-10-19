import React from 'react';

const style = {

}
const NavBar = () => {
    return (
        <nav>
            <div>
                <span>Logo Revochat</span>
                <input type="text" placeholder='Search' />
            </div>
            <div>
                <span>Guide</span>
                <span>Version</span>
                <span>Nous contacter</span>
                <label className='switch'>
                    <input type="checkbox" onClick={toggleDarkMode}/>
                <span className="slider"></span>
            </label>
                
            </div>
        </nav>
    );
}

export default NavBar;
