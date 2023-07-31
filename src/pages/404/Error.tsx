import './Error.css';
import error from './../../assets/404.jpg';
import { Link } from 'react-router-dom';

export function Error(){
    return(
        <main className='main-error'>
            <h2 className='tittle-error'>Ops... Essa página não existe...</h2>
            <img src={error} alt="error img" className='error-img'/>
            <div className='error-button-div'>
                <Link to='/'><button className='error-button'>Voltar</button></Link>
            </div>
        </main>
    );
}