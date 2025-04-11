function validateName() {
	const name = document.getElementById("contactName");
	const errorName = document.getElementById("errorName");

	errorName.classList.add("d-none");
	name.classList.remove("is-valid", "is-invalid");

	if (name.value.trim() === "") {
		errorName.classList.remove("d-none");
		name.classList.add("is-invalid");
	} else {
		name.classList.add("is-valid");
	}
}

function validateEmail() {
	const email = document.getElementById("contactEmail");
	const errorEmail = document.getElementById("errorEmail");
	const errorEmailFormat = document.getElementById("errorEmailFormat");

	errorEmail.classList.add("d-none");
	errorEmailFormat.classList.add("d-none");
	email.classList.remove("is-valid", "is-invalid");

	const value = email.value.trim();
	const regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,4}$/;

	if (value === "") {
		errorEmail.classList.remove("d-none");
		email.classList.add("is-invalid");
	} else if (!regex.test(value)) {
		errorEmailFormat.classList.remove("d-none");
		email.classList.add("is-invalid");
	} else {
		email.classList.add("is-valid");
	}
}

function validateInfo() {
	const info = document.getElementById("info");
	const errorInfoEmpty = document.getElementById("errorInfoEmpty");
	const errorInfoLength = document.getElementById("errorInfoLength");

	errorInfoEmpty.classList.add("d-none");
	errorInfoLength.classList.add("d-none");
	info.classList.remove("is-valid", "is-invalid");

	const value = info.value.trim();

	if (value === "") {
		errorInfoEmpty.classList.remove("d-none");
		info.classList.add("is-invalid");
	} else if (value.length > 250) {
		errorInfoLength.classList.remove("d-none");
		info.classList.add("is-invalid");
	} else {
		info.classList.add("is-valid");
	}
}
