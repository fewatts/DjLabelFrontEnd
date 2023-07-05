import './Menu.css';
import { Link } from 'react-router-dom';


export function Menu() {


    return (
        <>
        <h5 className='h5menu'><Link to='/'>❌</Link></h5>
                <div className='menu-ham'>
                    <ul className='list-menu'>
                        <li><Link to='/' ><h1 className='h1menu'>Home</h1></Link></li>
                        <li><Link to='/info' ><h1 className='h1menu'>Info</h1></Link></li>
                        <li><Link to='/register' ><h1 className='h1menu'>Cadastro</h1></Link></li>
                        <li><Link to='/about' ><h1 className='h1menu'>Sobre</h1></Link></li>
                    </ul>
                </div>
        </>
    );
}