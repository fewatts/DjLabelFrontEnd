import './Menu.css';
import { Link } from 'react-router-dom';

export function Menu() {
    return (
        <nav>
            <picture className='close-menu'><Link to='/'>❌</Link></picture>
            <section className='menu-ham'>
                <ul className='list-menu'>
                    <li><Link to='/'><h1 className='menu-option'>Home</h1></Link></li>
                    <li><Link to='/info'><h1 className='menu-option'>Sociais</h1></Link></li>
                    <li><Link to='/register'><h1 className='menu-option'>Cadastro</h1></Link></li>
                    <li><Link to='/about'><h1 className='menu-option'>Sobre</h1></Link></li>
                </ul>
            </section>
        </nav>
    );
}
