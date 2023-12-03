import './Sets.css';

const tracks = [
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1481703253&color=%231F5673&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        genre: 'DeepTech'
    },
    {
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1732834716&color=%231f5673&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        genre: 'Techno'
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
        link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1680383493&color=%231f5673&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
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
<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src=""></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/spinner-kopf" title="𝕾𝖕𝖎𝖓𝖓𝖊𝖓𝕶𝖔𝖕𝖋" target="_blank" style="color: #cccccc; text-decoration: none;">𝕾𝖕𝖎𝖓𝖓𝖊𝖓𝕶𝖔𝖕𝖋</a> · <a href="https://soundcloud.com/spinner-kopf/sets/ep-keima" title="EP: Keima" target="_blank" style="color: #cccccc; text-decoration: none;">EP: Keima</a></div>