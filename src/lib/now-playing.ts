type LastFmGetRecentTracks = {
    recenttracks: {
        track: {
            name: string; // Track title
            artist: {
                '#text': string; // Artist name
            };
            image: {
                '#text': string; // Image URL
            }[];
            url: string; // Last.fm URL
            '@attr': {
                nowplaying: string;
            };
        }[];
    };
};

const apiKey = import.meta.env.LASTFM_API_KEY;
const user = import.meta.env.LASTFM_USER;

let cache: LastFmGetRecentTracks | undefined;
let lastCached: Date | undefined;

export async function loadSong() {
    if (!user || !apiKey) return;

    const currentTime = new Date();

    if (
        !lastCached ||
        currentTime.getTime() - lastCached.getTime() >= 15 * 1000
    ) {
        const req = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json&limit=1`,
        );

        if (!req.ok) {
            return;
        }

        const data: LastFmGetRecentTracks = await req.json();
        cache = data;
        lastCached = currentTime;
    }

    const track = cache?.recenttracks.track[0];
    if (!track) {
        return;
    }

    return {
        title: track.name,
        artist: track.artist['#text'],
        image: track.image[track.image.length - 1]['#text'],
        url: track.url,
        nowPlaying: track['@attr']?.nowplaying === 'true',
    };
}
