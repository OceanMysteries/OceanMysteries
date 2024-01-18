// const scriptURL = 'https://script.google.com/macros/s/AKfycbzjNjzBMol1m0965T4PPSECveq92jFhq2UpXAy1atRZDpRDLx5HJJqM6VzHsmPQUjbICQ/exec'




const scriptURL = 'https://script.google.com/macros/s/AKfycbyHAFKHCMEwqaeRxP3iz9eBuv0yJu4DxFVDAno6juxKz3zRanlgFAKppSjr3t6OXioO2w/exec';

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



document.addEventListener('DOMContentLoaded', function () {
  // Sélectionnez les éléments du formulaire
  var participationSelect = document.querySelector('select[name="Participation"]');
  var restrictionsSelect = document.querySelector('select[name="Restrictions"]');
  var restrictionsLabel = document.querySelector('label[for="Restrictions"]');

  // Ajoutez un gestionnaire d'événement au changement de la valeur de participation
  participationSelect.addEventListener('change', function () {
      // Vérifiez si la valeur de participation est "Absent"
      if (participationSelect.value === 'Absent') {
          // Si "Absent", masquez et désactivez les restrictions alimentaires
          restrictionsSelect.removeAttribute('required');
      } else {
          // Sinon, affichez et activez les restrictions alimentaires
          restrictionsSelect.setAttribute('required', 'required');
      }
  });
});




  



