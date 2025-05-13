import React, { useEffect, useState } from 'react';
import './YoutubeSection.css';

const API_KEY = 'AIzaSyCqn6RNAw2DIFutWciOnbeIf5sROf6c1EA';
const VIDEO_IDS = [
    '8GLf8AU2liU',
    'CirIPNdL0Vc',
    'xroXlTLFZZY',
    'bue0voNscSI',
];

const YoutubeSection = () => {
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${VIDEO_IDS.join(',')}&key=${API_KEY}`
                );
                const data = await response.json();

                if (Array.isArray(data.items)) {
                    setVideos(data.items);
                } else {
                    setError('No videos found.');
                    console.warn('Unexpected API response:', data);
                }
            } catch (err) {
                console.error('YouTube API error:', err);
                setError('Failed to load videos.');
            }
        };

        fetchVideos();
    }, []);

    return (
        <section className="youtube-section">
            <img
                className="youtube-banner"
                src="https://yt3.googleusercontent.com/2xa1Lgln5ij8SPQhC7LCwxMcAjifh9NwE9E0kcoo2pETNIIHhIPBnK0_txhL9jxv3GNjvr5QDA=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                alt="Mercedes Pools Banner"
            />
            <h2 className="youtube-heading">Latest Videos</h2>

            {error ? (
                <p className="youtube-error">{error}</p>
            ) : (
                <div className="youtube-videos">
                    {videos.map(video => (
                        <div key={video.id} className="youtube-video">
                            <iframe
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.snippet.title}
                                allowFullScreen
                            ></iframe>
                            <p>{video.snippet.title}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default YoutubeSection;
