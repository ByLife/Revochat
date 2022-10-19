import React from 'react';
// import '../../styles/home.css'

const HomeComponent = ({test, voiture}) => {
    return (
        <div className='test'>
            <h1>HELLOO</h1>
            {test}

            <p>{voiture}</p>
        </div>
        
    );
}

export default HomeComponent;
