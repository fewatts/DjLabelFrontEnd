import './Info.css';

const artists = [
    {
        name: 'Bem4venturado',
        genre: 'House',
        profilePic: 'https://i1.sndcdn.com/avatars-QVoUubV5OVX1nbiT-yyXy0A-t500x500.jpg',
        soundcloudLink: 'https://soundcloud.com/enzo-beteto-5418300',
        instagramLink: 'https://www.instagram.com/bem4venturado/'
    },
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
        profilePic: 'https://i1.sndcdn.com/avatars-bHWmfg2gk7I4hoO8-p3kk1g-t500x500.jpg',
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
        name: 'SpinnenKopf',
        genre: 'Techno',
        profilePic: 'https://i1.sndcdn.com/avatars-ptppwi5a88f6rK1y-bzyGcQ-t500x500.jpg',
        soundcloudLink: 'https://soundcloud.com/user-831177117',
        instagramLink: 'https://www.instagram.com/spinnenkopf_/'
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
        <>
            <div className="header">
                <h1 className='h1info'>Artistas TetaSesh:</h1>
                <h3 className='h3info'>A - Z</h3>
            </div>
            <main className='info'>

                {artists.map(artist => (
                    <div className='infobox'>
                        <div className='card'>
                            <img src={artist.profilePic} alt={artist.name} className='profilepic' />
                            <h2 className='h1but'>{artist.name}</h2>
                            <h3><strong>{artist.genre}</strong></h3>
                            <div className='divBut'>
                                <button className='butGetCv'><a href={artist.soundcloudLink} target='blank'>SoundCloud</a></button>
                                <button className='butGetCv'><a href={artist.instagramLink} target='blank'>Instagram</a></button>
                            </div>
                        </div>
                    </div>
                ))}

            </main>
        </>
    );
}