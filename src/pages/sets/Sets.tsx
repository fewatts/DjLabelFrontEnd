import './Sets.css';

const tracks = [
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1481703253&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    }
]

const sets = [
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1557775135&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    },
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1508575018&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    },
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1476515899&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    },
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1484503345&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    }
]

export function Sets() {
    return (
        <>
            <h1 className='h1set'>Tracks:</h1>
            <div className='card-container'>
                {tracks.map(track => (
                    <div className='set'>
                        <iframe src={track.link}></iframe>
                    </div>
                ))}
            </div>
            <h1 className='h1set'>Sets:</h1>
            <div className='card-container'>
                {sets.map(set => (
                    <div className='set'>
                        <iframe src={set.link}></iframe>
                    </div>
                ))}
            </div>
        </>
    );
}
