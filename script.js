import { EmbeddedPlayer } from "./js/embedded-player.js";

		var embeddedPlayer = new EmbeddedPlayer(window, document.getElementById("video_container"), document.getElementById("video_info"));

		window.addEventListener("load", () => {
			embeddedPlayer.play();
        });



		embeddedPlayer.addWebRTCDataListener((data) => {
			console.log("Data received: " + data);
		});

		window.embeddedPlayer = embeddedPlayer;


		// Mute/Unmute Video Button for 360 playback
		document.getElementById("unmuteButton").addEventListener("click", function() {
			if (embeddedPlayer.isMuted()) {
				embeddedPlayer.mutePlayer(false);
				document.getElementById("unmuteButton").innerHTML = "Mute";
			} else {
				embeddedPlayer.mutePlayer(true);
				document.getElementById("unmuteButton").innerHTML = "Unmute";
			}
		});

		embeddedPlayer.addPlayerListener((status) => {
			if (status == "play") {
				if (embeddedPlayer.is360) {
					document.getElementById("unmuteButton").style.display = "block";
				}
			}
			else if (status == "ended") {
				document.getElementById("unmuteButton").style.display = "none";
			}
		});

