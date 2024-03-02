const scriptURL = 'https://script.google.com/macros/s/AKfycbyHAFKHCMEwqaeRxP3iz9eBuv0yJu4DxFVDAno6juxKz3zRanlgFAKppSjr3t6OXioO2w/exec';
const Rform = document.forms['remerciement-form'];

const participationSelect = document.getElementById("participation");
        const selectedValue = participationSelect.value;

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
