import './Home.css';
import home from './../../../src/assets/home.svg';

export function Home() {
    return (
        <main>
            <div className='container'>
                <h1 className='h1home'>Bem-vindo ao <strong><abbr title="Label de Artistas Dj's" className='abbrt'>Teta Sesh</abbr></strong>!</h1>
                <h2>Este é o nosso site de divulgação de Conteúdo dos artistas do <strong><abbr title="Label de Artistas Dj's" className='abbrt'>Teta Sesh</abbr></strong>.</h2>
                <p>Use a barra de navegação para acessar as informações c:</p>
            </div>
            <div className='homepic'><img src={home} alt="pic home" className='Homepic' /></div>
        </main>
    );
}