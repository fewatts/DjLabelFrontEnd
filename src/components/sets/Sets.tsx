import './Sets.css';

const tracks = [
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1481703253&color=%231F5673&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        genre: 'DeepTech'
    },
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1679297049&color=%231f5673&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        genre: 'House'
    },
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1653676437&color=%231f5673&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        genre: 'House'
    },
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1752639249%3Fsecret_token%3Ds-tlH9QFPvhdg&color=%231f5673&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        genre: 'Techno'
    },
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1661840088&color=%231f5673&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        genre: 'PsyTrance'
    },
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1678455198&color=%231f5673&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        genre: 'PsyTrance'
    },
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1707569373&color=%231f5673&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        genre: 'PsyTrance'
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
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1682579880&color=%231f5673&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        genre: 'Techno'
    },
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1476515899&color=%231F5673&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        genre: 'Phonk'
    }
]

export function Sets() {
    return (
        <section>
            <h4 className='audios-tittle'>Tracks:</h4>

            {tracks.map(track => (
                <figure className='audio-set'>
                    <iframe src={track.link}></iframe>
                </figure>
            ))}

            <h4 className='audios-tittle'>Sets:</h4>

            {sets.map(set => (
                <figure className='audio-set'>
                    <iframe src={set.link}></iframe>
                </figure>
            ))}

            <br />
        </section>
    );
}
