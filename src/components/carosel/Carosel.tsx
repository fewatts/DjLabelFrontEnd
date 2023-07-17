import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carosel.css';

import bemaventurado from './../../assets/artists/bemaventurado.jpeg';
import costai from './../../assets/artists/costai.jpeg';
import laomer from'./../../assets/artists/laomer.jpeg';
import oghthraxx from './../../assets/artists/oghthraxx.jpg';
import spinnenkopf from './../../assets/artists/spinnenkopf.jpeg';
import zanqueta from './../../assets/artists/zanqueta.jpeg';

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
        name: "Laomer",
        genre: "House",
        pic: laomer
    },
    {
        name: "Oghthraxx",
        genre: "Phonk & Techno",
        pic: oghthraxx
    },
    {
        name: "Spinnenkopf",
        genre: "Techno",
        pic: spinnenkopf
    },
    {
        name: "Zanqueta",
        genre: "PsyTechno",
        pic: zanqueta 
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
        infinite={true}
        animationDuration={3000}
        disableButtonsControls={true}
        controlsStrategy="responsive"
        autoPlayStrategy="action"
        autoPlay={true}
    />
);
