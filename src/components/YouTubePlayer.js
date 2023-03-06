import React, { useEffect, useRef } from 'react';

function YouTubePlayer(props) {
    const playerRef = useRef(null);

    useEffect(() => {
        // Load the YouTube player API script
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(script);

        // Create the YouTube player when the script is loaded
        script.onload = () => {
            window.YT.ready(() => {
                const player = new window.YT.Player(playerRef.current, {
                    videoId: props.videoId,
                    events: {
                        onReady: onPlayerReady,
                        onStateChange: onPlayerStateChange,
                    },
                });
            });
        };

        // Clean up the script when the component is unmounted
        return () => {
            document.body.removeChild(script);
        };
    }, [props.videoId]);

    const onPlayerReady = (event) => {
        // do something when player is ready
    };

    const onPlayerStateChange = (event) => {
        // do something when player state changes
    };

    return (
        <div>
            <div ref={playerRef} />
        </div>
    );
}

export default YouTubePlayer;
