function update_text() {
	let border_r = document.getElementById("border_R").value;
	let border_g = document.getElementById("border_G").value;
	let border_b = document.getElementById("border_B").value;

	let border_w = document.getElementById("border_width").value;

	let background_r = document.getElementById("background_R").value;
	let background_g = document.getElementById("background_G").value;
	let background_b = document.getElementById("background_B").value;

	let dummy_text = document.getElementById("dummyText");

	let borderColor = "rgb(" + border_r + "," + border_g + "," + border_b + ")";
	dummy_text.style.borderColor = borderColor;

	dummy_text.style.borderWidth = border_w + "px";

	let backgroundColor = "rgb(" + background_r + "," + background_g + "," + background_b + ")";
	dummy_text.style.backgroundColor = backgroundColor;
}
