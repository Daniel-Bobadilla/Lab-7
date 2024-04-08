function isValidPassword() {
	let passwordOne = document.getElementById("password_one").value;
	let passwordTwo = document.getElementById("password_two").value;

	let passwordLength = passwordOne.length;

	if (passwordLength < 8) {
		alert("Your password must be at least 8 characters long.");
	} else if (passwordOne != passwordTwo) {
		alert("Your passwords must match.");
	} else {
		alert("Your passwords match!");
	}
}
