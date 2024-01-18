// const scriptURL = 'https://script.google.com/macros/s/AKfycbzjNjzBMol1m0965T4PPSECveq92jFhq2UpXAy1atRZDpRDLx5HJJqM6VzHsmPQUjbICQ/exec'




const scriptURL = 'https://script.google.com/macros/s/AKfycbzACBrDFWG3Uz75lO39pETTQQJfURUT1TzUWSxhtNwXrEM0LD6mDSKrVj9V3Ey6Kf7qhA/exec';

const form = document.forms['rsvp-form'];

var rsvpForm = document.getElementById("rsvp-form");


form.addEventListener('submit', e => {
  const submitButton = document.getElementById('submitBtn');
  // submitButton.style.pointerEvents = "none"
  e.preventDefault();
  
  // Ajoutez le champ formType avec la valeur 'form1' aux données du formulaire
  const formData = new FormData(form);
  formData.append('formType', 'form1');

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => alert("Thank you! Your form is submitted successfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message));
});





  



