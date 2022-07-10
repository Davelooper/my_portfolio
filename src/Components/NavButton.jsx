import React from 'react';

function NavButton(props) {
    return (
        <button className='navbar__button'>
            {props.children}
        </button>
    );
}

export default NavButton;