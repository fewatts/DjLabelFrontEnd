import './Footer.css';
import gitlogo from './../../assets/github.svg'

export function Footer() {
    return (
        <footer>
            <a href="https://github.com/fewatts/tetaseshinfos" target='blank'><abbr title="repositório no github"><img src={gitlogo} alt="Repositório" className='git' /></abbr></a>
            <p>© Copyright, F</p>
        </footer>
    );
}