import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carosel.css';

import bemaventurado from './../../assets/artists/bemaventurado.jpeg';
import costai from './../../assets/artists/costai.jpeg';
import spinnenkopf from './../../assets/artists/spinnenkopf.jpeg';

// import pvtonis2 from './../../assets/events/pvtonis.jpeg';

const pics = [
    {
        name: "Bem4venturado",
        genre: "House",
        pic: bemaventurado
    },
    {
        name: "Costai",
        genre: "DeepTech",
        pic: costai
    },
    {
        name: "Spinnenkopf",
        genre: "Techno",
        pic: spinnenkopf
    }
];

export const Carrossel = () => (
    <AliceCarousel
        mouseTracking
        items={pics.map((pic, index) => (
            <>
                <h3 className='h3car'><strong>{pic.name} - {pic.genre}</strong></h3>
                <div key={index} className="carosel-container">
                    <img src={pic.pic} alt={`Imagem ${index + 1}`} className="carosel-img" />
                </div>
            </>
        ))}
        infinite
        animationDuration={8500}
        disableButtonsControls
        controlsStrategy="responsive"
        autoPlayStrategy="action"
        autoPlay
    />
);
