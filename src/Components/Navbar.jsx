import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg';
import { FaAlignJustify } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setNavbar] = useState (false);
    function toggleNavbar () {
        setNavbar (!isOpen);
    };
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to='/'>
                        <img src={logo} alt='Beach Resort'/>
                    </Link>
                    <button type='button' className='nav-btn' onClick={toggleNavbar}>
                            <FaAlignJustify className='nav-icon'/>
                    </button>
                </div>
                <ul className={isOpen?'nav-links show-nav':'nav-links'}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/rooms'>Rooms</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
