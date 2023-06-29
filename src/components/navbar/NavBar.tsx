import { useState } from 'react';
import logo from './../../assets/logonav.svg'
import { Link } from 'react-router-dom';
import './NavBar.css';

export function NavBar() {

    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className={`navbar ${isActive ? 'active' : ''}`}>
            <Link to='/'><img src={logo} alt="logo" className='logo' /></Link>

            <ul className={`links ${isActive ? 'active' : ''}`}>
                <li><Link to='/' onClick={toggleMenu}>Home</Link></li>
                <li><Link to='/info' onClick={toggleMenu}>Info</Link></li>
                <li><Link to='/about' onClick={toggleMenu}>Sobre</Link></li>
            </ul>

            <div className="navbar-toggle" onClick={toggleMenu}>
                <span className={`bar ${isActive ? 'active' : ''}`}></span>
                <span className={`bar ${isActive ? 'active' : ''}`}></span>
                <span className={`bar ${isActive ? 'active' : ''}`}></span>
            </div>
        </nav>
    );
}