import logo from './../../assets/logo-nav.jpeg'
import { Link } from 'react-router-dom';
import './NavBar.css';

export function NavBar() {
    return (
        <header>
            <nav className='navbar'>
                <picture className='logo-navbar'>
                    <Link to='/'><img src={logo} alt="logo" className='logo' /></Link>
                </picture>
                <ul id='nav-links'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/info'>Sociais</Link></li>
                    <li><Link to='/about'>Sobre</Link></li>
                </ul>
                <Link to='/menu'>
                    <span id='burguer' className="material-symbols-outlined">
                        menu
                    </span>
                </Link>
            </nav>
        </header>
    );
}
