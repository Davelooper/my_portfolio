import React from 'react';
import '../Styles/Banner/Banner.sass';

function Banner(props) {
    return (
        <div className='banner'>
            <div className="banner__overlay">
                <div className='banner__text-wrapper'>
                    <span className='banner__text'>Bonjour je suis David Donnot, développeur Full Stack spécialisé en PHP et React.</span>
                </div>
            </div>
        </div>
    );
}

export default Banner;