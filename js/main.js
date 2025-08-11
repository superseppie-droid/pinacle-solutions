const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = contactForm.name.value;
  const email = contactForm.email.value;
  const message = contactForm.message.value;

  db.collection('contacts').add({
    name,
    email,
    message,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    alert('Bedankt voor je bericht! We nemen snel contact op.');
    contactForm.reset();
  })
  .catch(error => {
    alert('Er is een fout opgetreden, probeer het later opnieuw.');
    console.error('Fout bij versturen:', error);
  });
});
