window.addEventListener("load", () => {
	// Selectors

	const sounds = document.querySelectorAll(".sound");
	const pads = document.querySelectorAll(".pads div");

	// Play the sound

	pads.forEach((pad, index) => {
		pad.addEventListener("click", function () {
			sounds[index].currentTime = 0;
			sounds[index].play();
		});
	});
});
