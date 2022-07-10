import React from 'react';
import SocialNetworksContainer from './SocialNetworksContainer';
import NavButton from './NavButton';
import '../Styles/Navbar/Navbar.sass';
import Hamburger from '../images/hamburger.png'
import { useState } from 'react';
import { useEffect } from 'react';
import useWindowDimensions from '../Hooks/useWindowDimensions';

function Navbar(props) {
    const [areLinksVisible, setAreLinksVisible] = useState(true)
    const {width} = useWindowDimensions()
    console.log(width);

    useEffect(() => {
        if (width < 577) {
            setAreLinksVisible(false)
        } else {
            setAreLinksVisible(true)
        }
    }, [width])

    function handleClick() {
        if (areLinksVisible) {
            setAreLinksVisible(false)
        } else {
            setAreLinksVisible(true)
        }
    }
    
    return (
        <nav className='navbar'>
            <div className="navbar__wrapper">
            <div className='navbar__logo'>
                <span className='navbar__name navbar__firstname'>David</span>
                <span className="navbar__name navbar__lastname">Donnot</span>
            </div>
            {
                areLinksVisible &&
                <div className='navbar__links'>
                <a href="#about" className='navbar__link'><NavButton>Mon parcours</NavButton></a>
                <a href="#realizations" className='navbar__link'><NavButton>Réalisations</NavButton></a>
                <a href="#contact" className='navbar__link'><NavButton>Contact</NavButton></a>
            </div>
            }
            <SocialNetworksContainer />
            <div className="navbar__wrapper navbar__wrapper--d-none">
                <img className='navbar__burger' onClick={handleClick} src={Hamburger} alt="An icon" />
            </div>
            </div>
        </nav>
    );
}

export default Navbar;