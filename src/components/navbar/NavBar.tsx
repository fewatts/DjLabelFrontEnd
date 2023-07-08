import logo from './../../assets/logonav.svg'
import { Link } from 'react-router-dom';
import './NavBar.css';

export function NavBar() {
    return (
        <nav className='navbar'>
            <div className='logo-container'>
                <Link to='/'><img src={logo} alt="logo" className='logo' /></Link>
            </div>

            <div id='itens'>
                <ul id='itens2'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/info'>Info</Link></li>
                    <li><Link to='/ouca'>Ouça</Link></li>
                    <li><Link to='/about'>Sobre</Link></li>
                </ul>
            </div>

            <Link to='/menu'>
                <span id='burguer' className="material-symbols-outlined">
                    menu
                </span>
            </Link>
        </nav>
    );
}
