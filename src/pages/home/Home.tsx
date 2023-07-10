import './Home.css';
import home from './../../../src/assets/home.svg';
import soundcloud from './../../assets/soundcloud.svg';
import youtube from './../../assets/youtube.svg';
import { Sets } from '../sets/Sets';

export function Home() {

    return (
        <>
            <main>
                <div className='container'>
                    <h1 className='h1home'>Bem-vindo!</h1>
                    <h4 className='texthome'>Este é o nosso site de divulgação de Conteúdo dos artistas do <strong><abbr title="Label de Artistas Dj's" className='abbrt'>Teta Sesh</abbr></strong>. C:</h4>

                    <div className='out'>

                        <a href="https://soundcloud.com/tetasesh" target='blank' ><img src={soundcloud} alt="Soundcloud" className='soundcloud' /></a>

                        <a href="https://www.youtube.com/@TetaSesh" target='blank' ><img src={youtube} alt="youtube" className='youtube' /></a>
                    </div>
                </div>
                <div className='homepic'><img src={home} alt="pic home" className='Homepic' /></div>
            </main>
            <div className='splithome'>
                <h1 className='h1ouca'>Ouça:</h1>
            </div>
            <section>
                <Sets/>
            </section>
        </>
    );
}