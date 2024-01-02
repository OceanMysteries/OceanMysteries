const scriptURL = 'https://script.google.com/macros/s/AKfycbw1-dHGeYXQe6O9uudyyrS6Lo19La_5Z2j1Y5RT4FejoJqdN-mGpU0zMlxIQgoDPZjcTA/exec';
const Rform = document.forms['remerciement-form'];

Rform.addEventListener('submit', e => {
  e.preventDefault();

  // Ajoutez le champ formType avec la valeur 'form2' aux données du formulaire
  const formData = new FormData(Rform);
  formData.append('formType', 'form2');

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => alert("Thank you! Your form is submitted successfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message));
});