(function() {

	// Countdown Webinar Form
	const webinarForm = document.querySelector('.countdown');

	// Sign Up for Free
	const signUpForFree = document.querySelector('.sign-up-for-free');

	// Validator function
	function validate(form) {
		const fullname = form.querySelector('#userFullname');
		const email = form.querySelector('#userEmail');
		// Error messages
		const fullnameError = form.querySelector("#userFullname + label");
		const emailError = form.querySelector("#userEmail + label");

		// Valid Inputs
		const expectedFullname = /(\w)+/;
		const expectedEmail = /@gmail.com$/; // Valid email address

		if (!expectedFullname.test(fullname.value) && !expectedEmail.test(email.value)) {
			// If all inputs were invalid
			fullnameError.className = 'show-error';
			emailError.className = 'show-error';
		} else if (!expectedFullname.test(fullname.value)) {
			// If name is either blank or invalid
			emailError.classList.remove('show-error');
			fullnameError.className = 'show-error';
		} else if (!expectedEmail.test(email.value)) {
			// If email if either blank or invalid
			fullnameError.classList.remove('show-error');
			emailError.className = 'show-error';
		} else {
			// If all valid
			fullnameError.classList.remove('show-error');
			emailError.classList.remove('show-error');
			fullname.value = '';
			email.value = '';
		}

	}

	webinarForm.addEventListener('submit', function(e) {
		e.preventDefault();
		validate(this);
	});

	signUpForFree.addEventListener('submit', function(e) {
		e.preventDefault();
		validate(this);
	});


})();