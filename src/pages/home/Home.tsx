import './Home.css';
import homeMobile from './../../../src/assets/home-mobile.jpg';
import soundcloud from './../../assets/soundcloud.svg';
import youtube from './../../assets/youtube.svg';
import { Sets } from '../sets/Sets';

export function Home() {

    return (
        <>
            <main>
                <div className='container'>
                    <div className='textos'>
                        <h1 className='h1home'>Bem-vindo!</h1>
                        <h4 className='texthome'>Este é o nosso site de divulgação de Conteúdo dos artistas do <strong><abbr title="Label de Artistas Dj's" className='abbrt'>Teta Sesh</abbr></strong>. C:</h4>
                        <div className='out'>
                            <a href="https://soundcloud.com/tetasesh" target='blank' ><img src={soundcloud} alt="Soundcloud" className='soundcloud' /></a>
                            <a href="https://www.youtube.com/@TetaSesh" target='blank' ><img src={youtube} alt="youtube" className='youtube' /></a>
                        </div>
                    </div>
                </div>
                <div className='intropic'>x</div>
                <div className='homepic'><a href="https://www.freepik.com/free-vector/dj-tools-equipment-isometric-set-with-audio-mixer-headphone-vinyl-record-player-speakers-instruments-isolated-vector-illustration_26765259.htm#page=2&query=dj&position=12&from_view=search&track=sph"><abbr title="Image by macrovector"><img src={homeMobile} alt="pic home" className='Homepic' /></abbr></a></div>
            </main>
            <div className='splithome'>
                <h1 className='h1ouca'>Ouça:</h1>
            </div>
            <section>
                <Sets />
            </section>
        </>
    );
}