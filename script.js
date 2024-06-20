const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const gradientBox = document.querySelector(".gradient-box");
const textArea = document.querySelector("textarea");
const refresh = document.querySelector(".refresh");
const copy = document.querySelector(".copy");

//* GETS THE RANDOM COLOR HEX CODE
const getRandomColor = () => {
	const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
	return `#${randomHex}`;
};

//* GENERATES THE MAIN GRADIENT
const generateGradient = (colorRandom) => {
	if (colorRandom) {
		colorInputs[0].value = getRandomColor();
		colorInputs[1].value = getRandomColor();
	}
	const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
	gradientBox.style.background = gradient;
	textArea.value = `background: ${gradient};`;
};

//* CHANGE THE ANGLE OF GRADIENT
colorInputs.forEach((input) => {
	input.addEventListener("input", () => generateGradient(false));
});

//* COPIES THE HEX CODE
const copyCode = () => {
	navigator.clipboard.writeText(textArea.value);
	copy.innerText = "Code Copied";
	setTimeout(() => (copy.innerText = "Copy Code"), 1000);
};

selectMenu.addEventListener("change", () => generateGradient(false));
refresh.addEventListener("click", () => generateGradient(true));
copy.addEventListener("click", copyCode);
