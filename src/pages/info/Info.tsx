import './Info.css';

const artists = [
    {
        name: 'CostaI',
        genre: 'DeepTech',
        profilePic: 'https://i1.sndcdn.com/avatars-XNvFE6BT4CmhlhVY-6qpkHQ-t500x500.jpg',
        soundcloudLink: 'https://soundcloud.com/costaimusic',
        instagramLink: 'https://www.instagram.com/costai.wav/'
    },
    {
        name: 'Dabague',
        genre: 'PsyTrance',
        profilePic: 'https://i1.sndcdn.com/avatars-xkz1oQLLXfpKeEZf-LTaThQ-t500x500.jpg',
        soundcloudLink: 'https://soundcloud.com/user-654415983',
        instagramLink: 'https://www.instagram.com/dabague_/'
    },
    {
        name: 'Laomer',
        genre: 'House',
        profilePic: 'https://i1.sndcdn.com/avatars-iCiFdyIa3ZwXg7Tm-BFajgA-t500x500.jpg',
        soundcloudLink: 'https://soundcloud.com/laomer',
        instagramLink: 'https://www.instagram.com/quedorlaomer/'
    },
    {
        name: 'Ogthraxx',
        genre: 'Techno & Phonk',
        profilePic: 'https://i1.sndcdn.com/avatars-PLUYBW7LFwGAn2vR-UOrM1A-t500x500.jpg',
        soundcloudLink: 'https://soundcloud.com/jovemthraxx',
        instagramLink: 'https://www.instagram.com/ogthraxx1/'
    },
    {
        name: '𝔖𝔭𝔦𝔫𝔫𝔢ß',
        genre: 'Detroit Techno',
        profilePic: 'https://i1.sndcdn.com/avatars-SbO34mERUbdXPgJp-IDGy7Q-t500x500.jpg',
        soundcloudLink: 'https://soundcloud.com/djspinneb',
        instagramLink: 'https://www.instagram.com/__spinneb__/'
    },
    {
        name: 'Zanqueta',
        genre: 'PsyTechno',
        profilePic: 'https://i1.sndcdn.com/avatars-L4EPEPnRPkxui7lS-5vUGKQ-t500x500.jpg',
        soundcloudLink: 'https://soundcloud.com/gustavo-moreira-933671017',
        instagramLink: 'https://www.instagram.com/guszanqueta/'
    }
];

export function Info() {
    return (
        <main>
            <header className='info-header'>
                <h1 className='info-tittle-1'>Artistas TetaSesh:</h1>
                <h3 className='info-tittle-2'>A - Z</h3>
            </header>
            <section className='info-section'>
                {artists.map(artist => (
                    <figure className='info-card'>
                        <div className='card'>
                            <img src={artist.profilePic} alt={artist.name} className='profilepic' />
                            <h2 className='info-tittle-3'>{artist.name}</h2>
                            <h3><strong>{artist.genre}</strong></h3>
                            <div className='info-buttons'>
                                <button className='butGetCv'><a href={artist.soundcloudLink} target='_blank'>SoundCloud</a></button>
                                <button className='butGetCv'><a href={artist.instagramLink} target='_blank'>Instagram</a></button>
                            </div>
                        </div>  
                    </figure>
                ))}
            </section>
        </main>

    );
}