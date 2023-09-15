// JavaScript code to hide the audio player after playing the song
const audioPlayer = document.getElementById("audio-player");
const hideAudioButton = document.getElementById("hide-audio-button");

// Add an event listener to the audio player to detect when it finishes playing
audioPlayer.addEventListener("ended", () => {
    // Hide the audio player
    audioPlayer.style.display = "none";
    // Show the "Hide Player" button
    hideAudioButton.style.display = "block";
});

// Add an event listener to the "Hide Player" button to show the audio player again
hideAudioButton.addEventListener("click", () => {
    // Show the audio player
    audioPlayer.style.display = "block";
    // Hide the "Hide Player" button
    hideAudioButton.style.display = "none";
});
