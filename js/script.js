// Regex
const regexName = /^[A-Z][A-Za-z\é\è\ê\ô\-]+$/;
const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

// Récupération des inputs et de la textarea
const lastName = document.querySelector("#name");
const email = document.querySelector("#email");
const textarea = document.querySelector("#message");

/**
 * Déclaration de la fonction lastNameValidation pour la validation du champ nom
 *  @param {String} lastName
 */
const lastNameValidation = (lastName) => {
  // Ecoute de l'événement "change" sur l'input lastName
  lastName.addEventListener("change", (e) => {
    e.preventDefault();
    // condition if... else
    // La méthode match() permet d'obtenir le tableau des correspondances entre la chaîne courante et une expression rationnelle.
    if (lastName.value.match(regexName)) {
      document.querySelector("#nameErrorMessage").textContent = " ";
      return true;
    } else {
      document.querySelector("#nameErrorMessage").textContent =
        "Veuillez saisir un nom valide, ex : Dupont";
      return false;
    }
  });
};
// Appel de la fonction lastNameValidation
lastNameValidation(lastName);

/**
 * Déclaration de la fonction emailValidation pour la validation du champ email
 * @param {String} email
 */
const emailValidation = (email) => {
  // Ecoute de l'événement "change" sur l'input email
  email.addEventListener("change", (e) => {
    e.preventDefault();
    if (email.value.match(regexEmail)) {
      document.querySelector("#emailErrorMessage").textContent = " ";
      return true;
    } else {
      document.querySelector("#emailErrorMessage").textContent =
        "Veuillez saisir un email valide, ex : exemple@contact.com";
      return false;
    }
  });
};
// Appel de la fonction emailValidation
emailValidation(email);
