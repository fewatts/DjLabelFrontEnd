import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carosel.css';

import bemaventurado from './../../assets/artists/bemaventurado.jpeg';
import costai from './../../assets/artists/costai.jpeg';
import dabague from './../../assets/artists/dabague.jpeg';
import laomer from './../../assets/artists/laomer.jpeg';
import ogthraxx from './../../assets/artists/ogthraxx.jpeg'
import spinnenkopf from './../../assets/artists/spinnenkopf.jpeg';
import zanqueta from './../../assets/artists/zanqueta.jpeg';

const pics = [
    {
        name: "Bem4venturado",
        pic: bemaventurado
    },
    {
        name: "Costai",

        pic: costai
    },
    {
        name: "Dabague",

        pic: dabague
    },
    {
        name: "Laomer",
        pic: laomer
    },
    {
        name: "Ogthraxx",
        pic: ogthraxx
    },
    {
        name: "Spinnenkopf",
        pic: spinnenkopf
    },
    {
        name: "Zanqueta",
        pic: zanqueta
    }
];

export const Carrossel = () => (
    <AliceCarousel
        mouseTracking
        items={pics.map((pic, index) => (
            <>
                <h3 className='h3car'><strong>{pic.name}</strong></h3>
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
        autoPlay={true} />
);
