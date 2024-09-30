<!-- Add JavaScript to Validate reCAPTCHA -->
<script>
function checkRecaptcha() {
  var response = grecaptcha.getResponse();
  if (response.length === 0) {
    alert("Please complete the reCAPTCHA.");
    return false; // Prevent form submission
  }
  return true; // Allow form submission
}
</script>
