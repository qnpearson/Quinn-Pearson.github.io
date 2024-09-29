<!-- recaptcha.js -->
<script>
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Execute reCAPTCHA
    grecaptcha.enterprise.execute('6LfNLlEqAAAAADJeZlc_8Y64x1SvTdyQi3UnDh4B', {action: 'submit'})
      .then(function (token) {
        if (token) {
          // Add the reCAPTCHA token as a hidden field in the form
          const recaptchaResponseInput = document.createElement('input');
          recaptchaResponseInput.setAttribute('type', 'hidden');
          recaptchaResponseInput.setAttribute('name', 'g-recaptcha-response');
          recaptchaResponseInput.setAttribute('value', token);

          // Append the hidden field to the form
          document.getElementById('contact-form').appendChild(recaptchaResponseInput);

          // Now submit the form
          document.getElementById('contact-form').submit();
        } else {
          alert('reCAPTCHA verification failed. Please try again.');
        }
      })
      .catch(function (error) {
        console.error('reCAPTCHA error:', error);
        alert('Error verifying reCAPTCHA. Please try again.');
      });
  });
</script>
