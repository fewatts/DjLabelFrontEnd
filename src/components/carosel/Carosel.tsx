import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carosel.css';

import bemaventurado from './../../assets/artists/bemaventurado.jpeg';
import costai from './../../assets/artists/costai.jpeg';
import spinnenkopf from './../../assets/artists/spinnenkopf.jpeg';

const pics = [
    {
        pic: bemaventurado,
    },
    {
        pic: costai,
    },
    {
        pic: spinnenkopf,
    },
];

export const Carrossel = () => (
    <AliceCarousel
        mouseTracking
        items={pics.map((pic, index) => (
            <div key={index} className="carosel-container">
                <img src={pic.pic} alt={`Imagem ${index + 1}`} className="carosel-img" />
            </div>
        ))}
        infinite
        animationDuration={8500}
        disableButtonsControls
        controlsStrategy="responsive"
        autoPlayStrategy="action"
        autoPlay
    />
);
