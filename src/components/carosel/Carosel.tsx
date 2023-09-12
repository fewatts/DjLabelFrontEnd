import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carosel.css';

import tetasesh from './../../assets/logo-nav.jpeg';
import costai from './../../assets/artists/costai.jpeg';
import dabague from './../../assets/artists/dabague.jpeg';
import laomer from './../../assets/artists/laomer.jpeg';
import ogthraxx from './../../assets/artists/ogthraxx.jpeg'
import spinnenkopf from './../../assets/artists/spinnenkopf.jpeg';
import zanqueta from './../../assets/artists/zanqueta.jpeg';
import notFound from './../../assets/404.jpg'

const pics = [
    {
        name: "TetaSesh",
        pic: tetasesh
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
    },
    {
        name: "🎛️",
        pic: notFound
    }
];

export const Carrossel = () => (
    <AliceCarousel
        mouseTracking
        items={pics.map((pic, index) => (
            <>
                <figcaption><h3 className='corosel-tittle'><strong>{pic.name}</strong></h3></figcaption>
                <figure key={index} className="corosel-picture">
                    <img src={pic.pic} alt={`Imagem ${index + 1}`} className="carosel-img" />
                </figure>
            </>
        ))}
        infinite={true}
        animationDuration={3000}
        disableButtonsControls={true}
        controlsStrategy="responsive"
        autoPlayStrategy="action"
        autoPlay={true} />
);
