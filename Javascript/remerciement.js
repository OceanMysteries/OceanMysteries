const scriptURL = 'https://script.google.com/macros/s/AKfycbyHAFKHCMEwqaeRxP3iz9eBuv0yJu4DxFVDAno6juxKz3zRanlgFAKppSjr3t6OXioO2w/exec';
const Rform = document.forms['remerciement-form'];

Rform.addEventListener('submit', e => {
  const submitButton = document.getElementById('submitBtn');
  submitButton.style.pointerEvents = "none"
  e.preventDefault();

  // Ajoutez le champ formType avec la valeur 'form2' aux données du formulaire
  const formData = new FormData(Rform);
  formData.append('formType', 'form2');

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => alert("Merci! Votre formulaire a été soumis avec succès."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Erreur !', error.message));
});
