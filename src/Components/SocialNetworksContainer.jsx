import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {FaLinkedinIn} from "react-icons/fa";

function SocialNetworksContainer(props) {
    return (
        <div className='network'>
            <a href="https://github.com/Davelooper" target={'blank'} className="network__link">
            <div className="network__wrapper">
                <FaGithub style={{width: '25px', height: '25px', color: '#418FD6'}}/>
            </div>
            </a>
            <a href="https://www.linkedin.com/in/david-donnot-1b1534230" target={'blank'} className="network__link">
            <div className="network__wrapper">
                <FaLinkedinIn style={{width: '25px', height: '25px', color: '#418FD6'}}/>
            </div>
            </a>
        </div>
    );
}

export default SocialNetworksContainer;