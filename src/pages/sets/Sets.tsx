import './Sets.css';

const tracks = [
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1481703253&color=%231F5673&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        genre: 'DeepTech'
    },
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1406623036&color=%231F5673&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        genre: 'Phonk'
    },
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1533530380&color=%231F5673&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        genre: 'Phonk'
    }
]

const sets = [
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1557775135&color=%231F5673&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        genre: 'House'
    },
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1567587547&color=%231F5673&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        genre: 'Techno'
    },
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1562411989&color=%231F5673&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        genre: 'Techno'
    },
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1564427800&color=%231F5673&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        genre: 'Techno'
    },
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1476515899&color=%231F5673&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        genre: 'Phonk'
    }
]

export function Sets() {
    return (
        <main>
            <h1 className='h1set'>Tracks:</h1>
            <div className='card-container'>
                {tracks.map(track => (
                    <>
                        <h4 className='musicgenre'>{track.genre}</h4>
                        <div className='set'>
                            <iframe src={track.link}></iframe>
                        </div>
                    </>
                ))}
            </div>
            <h1 className='h1set'>Sets:</h1>
            <div className='card-container'>
                {sets.map(set => (
                    <>
                        <h4 className='musicgenre'>{set.genre}</h4>
                        <div className='set'>
                            <iframe src={set.link}></iframe>
                        </div>
                    </>
                ))}
            </div>
            <br />
        </main>
    );
}

