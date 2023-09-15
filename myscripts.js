const audio = document.getElementById('myAudio');
        const playButton = document.getElementById('playButton');
        const pauseButton = document.getElementById('pauseButton');

        playButton.addEventListener('click', () => {
            audio.play();
        });

        pauseButton.addEventListener('click', () => {
            audio.pause();
        });