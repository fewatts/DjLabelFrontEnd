import './Footer.css';
import logo from './../../assets/logo-nav.jpeg';

export function Footer() {
    return (
        <footer>
            <p>© Copyright</p>
            <abbr title="Label de Artistas Dj's" className='abbrt'><a href="https://www.instagram.com/tetaseshh/"><img src={logo} alt="Tetasesh logo" className='logo-footer' /></a></abbr>
        </footer>
    );
}