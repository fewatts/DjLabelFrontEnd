import './Home.css';
import homeMobile from './../../../src/assets/home-mobile.jpg';
import soundcloud from './../../assets/soundcloud.svg';
import youtube from './../../assets/youtube.svg';
import { Sets } from '../../components/sets/Sets';
import { Carrossel } from '../../components/carosel/Carosel';

export function Home() {

    return (
        <main>
            <section className='section-main'>
                <aside className='aside-1-main'>
                    <h1 className='home-tittle'>Bem-vindo(a)!</h1>
                    <h2 className='home-text'>Esse é o site do TetaSesh, um coletivo de Dj's</h2>
                    <ul className='social-links'>
                        <li>
                            <a href="https://soundcloud.com/tetasesh" target='blank' ><img src={soundcloud} alt="Soundcloud" className='soundcloud' /></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@TetaSesh" target='blank' ><img src={youtube} alt="youtube" className='youtube' /></a>
                        </li>
                    </ul>
                </aside>
                <div className='split-mobile'>x</div>
                <picture className='main-homepic'>
                    <a href="https://www.freepik.com/free-vector/dj-tools-equipment-isometric-set-with-audio-mixer-headphone-vinyl-record-player-speakers-instruments-isolated-vector-illustration_26765259.htm#page=2&query=dj&position=12&from_view=search&track=sph"><abbr title="Image by macrovector"><img src={homeMobile} alt="pic home" className='main-Homepic' /></abbr></a>
                </picture>
            </section>
            <section>
                <div className='section-2'>
                    <h3 className='tittle-other-sections'>Artistas (A-Z):</h3>
                </div>
                <hr />
                <aside className='section-carosel'>
                    <div className='carrossel-container'>
                        <Carrossel />
                    </div>
                    <hr />
                </aside>
            </section>
            <section>
                <div className='section-3'>
                    <h3 className='tittle-other-sections'>Ouça:</h3>
                </div>
                <aside>
                    <Sets />
                </aside>
            </section>
        </main>
    );
}