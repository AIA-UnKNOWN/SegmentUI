(function() {

	// Countdown Webinar Form
	const webinarForm = document.querySelector('.countdown');

	// Sign Up for Free
	const signUpForFree = document.querySelector('.sign-up-for-free');

	// Validator function
	function validate(form) {
		const fullname = form.querySelector('#userFullname').value;
		const email = form.querySelector('#userEmail').value;

		// Valid Inputs
		const expectedFullname = /(\w)+/;
		const expectedEmail = /[a-zA-Z0-9]+(@[a-z]+.[a-z]+)$/; // Valid email address

		if (!expectedFullname.test(fullname) && !expectedEmail.test(email)) {
			console.log('Please fill with a valid inputs!');
		} else if (!expectedFullname.test(fullname)) {
			console.log('Invalid fullname!');
		} else {
			console.log('Invalid email address!');
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