document.getElementById("submit").onclick = validatePasswords;

function validatePasswords() {
	const password1 = document.getElementById("input1").value;
	const password2 = document.getElementById("input2").value;
	if (password1.length < 8){
		alert("Password 1 is less than 8 chars long!");
	} else if (password2.length < 8) {
		alert("Password 2 is less than 8 chars long!");
	} else if (password1 != password2) {
		alert("Passwords do not match!");
	} else {
		alert("Everything is good! :)");
	}
}

