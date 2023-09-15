// Get a reference to the audio element
const audio = document.getElementById("myAudio");

// Add a click event listener to toggle the visibility
audio.addEventListener("click", function() {
  if (audio.style.display === "none" || audio.style.display === "") {
    audio.style.display = "block";
  } else {
    audio.style.display = "none";
  }
});