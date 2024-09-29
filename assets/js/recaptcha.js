document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  // Execute reCAPTCHA
  grecaptcha.enterprise.execute('6LfNLlEqAAAAADJeZlc_8Y64x1SvTdyQi3UnDh4B', {action: 'submit'})
    .then(function (token) {
      if (token) {
        // Add the token to the form
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', 'g-recaptcha-response');
        input.setAttribute('value', token);

        // Append the input to the form
        document.getElementById('contact-form').appendChild(input);

        // Now submit the form to Formspree
        fetch('https://formspree.io/f/your-form-id', {
          method: 'POST',
          body: new FormData(document.getElementById('contact-form')),
          headers: {
            'Accept': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); // Clear the form
          } else {
            alert('Oops! There was a problem submitting the form.');
          }
        })
        .catch(error => console.error('Form submission error:', error));
      } else {
        alert('reCAPTCHA validation failed. Please try again.');
      }
    })
    .catch(function (error) {
      console.error('Error executing reCAPTCHA:', error);
      alert('reCAPTCHA error. Please try again.');
    });
});
