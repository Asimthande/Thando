document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const messageEl = document.getElementById('formMessage');
  messageEl.textContent = 'Thank you! Your message has been sent.';
  this.reset();
});
