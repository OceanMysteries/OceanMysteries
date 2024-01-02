// const scriptURL = 'https://script.google.com/macros/s/AKfycbzjNjzBMol1m0965T4PPSECveq92jFhq2UpXAy1atRZDpRDLx5HJJqM6VzHsmPQUjbICQ/exec'




const scriptURL = 'https://script.google.com/macros/s/AKfycbw1-dHGeYXQe6O9uudyyrS6Lo19La_5Z2j1Y5RT4FejoJqdN-mGpU0zMlxIQgoDPZjcTA/exec';

const form = document.forms['rsvp-form'];

form.addEventListener('submit', e => {
  e.preventDefault();

  // Ajoutez le champ formType avec la valeur 'form1' aux données du formulaire
  const formData = new FormData(form);
  formData.append('formType', 'form1');

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => alert("Thank you! Your form is submitted successfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message));
});





  

