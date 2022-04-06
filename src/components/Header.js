import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.svg';
import dashIcon from '../assets/dashboard.svg';
import rocket from '../assets/rockets.svg'; 

const Header = () => {
    return (
        <div className='navBar'>
            <img src={Logo}/>
            <nav>
                <div className='nav_item'>
                    <Link to="/"><img src={dashIcon}/></Link>   
                </div>

                <div className='nav_item rocketcon'>
                    <Link to="compare"><img src={rocket} /></Link>  
                </div>

                <div className='nav_item'>
                    <Link to="timeline">T</Link>   
                </div>
                
            </nav>
        </div>
    );
};

export default Header;