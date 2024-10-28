document.getElementById("submit").onclick = changeParagraph;

function changeParagraph() {
	const borderR = Number(document.getElementById("borderR").value);
	const borderG = Number(document.getElementById("borderG").value);
	const borderB = Number(document.getElementById("borderB").value);
	const borderwidth = document.getElementById("borderwidth").value;

	const backgroundR = Number(document.getElementById("backgroundR").value);
	const backgroundG = Number(document.getElementById("backgroundG").value);
	const backgroundB = Number(document.getElementById("backgroundB").value);

	const paragraph = document.getElementById("paragraph");

	paragraph.style.borderColor = `rgb(${borderR}, ${borderG}, ${borderB})`;
	paragraph.style.borderWidth = `${borderwidth}px`;

	paragraph.style.backgroundColor = `rgb(${backgroundR}, ${backgroundG}, ${backgroundB})`;
}