//get elements from Html

var uName = document.getElementById('uName');
var uNameError = document.getElementById('uNameError');

var Email = document.getElementById('Email');
var EmailError = document.getElementById('EmailError');

var Pass = document.getElementById('Pass');
var PassError = document.getElementById('PassError');

var rePass = document.getElementById('rePass');
var rePassError = document.getElementById('rePassError');


//funcation for submit button

function subm() {

	//Name Field

	if (uName.value == "") {
		uName.style.borderBottomColor = "red";
		uNameError.innerHTML = "Enter your Name First";
		uName.focus();
		return false;
	}

	//Email Field

	if (Email.value == "") {
		Email.style.borderBottomColor = "red";
		EmailError.innerHTML = "Enter your Email First";
		Email.focus();
		return false;
	}

	//Pass Field

	if (Pass.value == "") {
		Pass.style.borderBottomColor = "red";
		PassError.innerHTML = "Enter your Password First";
		Pass.focus();
		return false;
	}

	//Pass Length

	if (Pass.value.length < 6) {
		Pass.style.borderBottomColor = "red";
		PassError.innerHTML = "Enter Atleast 6 Digit Password";
		Pass.focus();
		return false;
	}

	//Confirm password Field

	if (rePass.value == "") {
		rePass.style.borderBottomColor = "red";
		rePassError.innerHTML = "Confirm your Password";
		rePass.focus();
		return false;
	}

	//Confirm password Field

	if (rePass.value != Pass.value) {
		rePass.style.borderBottomColor = "red";
		rePassError.innerHTML = "Password Didn't Match";
		rePass.focus();
		return false;
	}

}

// a function to remove error after fill input tag

function errorValid() {
	if (uName.value != "") {
		uName.style.borderBottomColor = "#112031";
		uNameError.innerHTML = "";
	}

	if (Email.value != "") {
		Email.style.borderBottomColor = "#112031";
		EmailError.innerHTML = "";
	}

	if (Pass.value != "") {
		Pass.style.borderBottomColor = "#112031";
		PassError.innerHTML = "";
	}

	if (rePass.value != "") {
		rePass.style.borderBottomColor = "#112031";
		rePassError.innerHTML = "";
	}

}

uName.addEventListener('blur', errorValid);
Email.addEventListener('blur', errorValid);
Pass.addEventListener('blur', errorValid);
rePass.addEventListener('blur', errorValid);


//modal work

var trigger = document.getElementById('trigger');
var modal = document.getElementById('modal');
var closebtn = document.getElementById('closebtn');


trigger.addEventListener('click', function () {
	modal.style.display = 'flex';

});


closebtn.addEventListener('click', function () {
	modal.style.display = 'none';

});
