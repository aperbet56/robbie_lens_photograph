// Récupération des éléments HTML5
const arrowBtn = document.querySelector(".arrow__btn");
const currentYear = document.querySelector(".year");
const menuBurger = document.querySelector(".nav__toggler");
const navigation = document.querySelector(".navigation");

// Déclaration de la fonction getCurrentYear qui va permettre l'affichage dynamique de l'année
const getCurrentYear = () => {
  // Récupération de la date actuelle stockée dans la constante date
  const date = new Date();
  //console.log(date);

  // Récupération de l'année stockée dans la constante year
  const year = date.getFullYear();
  //console.log(year);

  // Affichage dynamique de l'année en cours
  currentYear.textContent = year;
};
// Appel de la fonction getCurrentYear()
getCurrentYear();

// Ecoute de l'événement "click" sur la flèche
arrowBtn.addEventListener("click", () => {
  // La méthode Window.scrollTo() permet de faire défiler la fenêtre pour atteindre les coordonnées données dans le document.
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth", // Le défilement se fait en douceur
  });
});

// Déclaration de la fonction toggleNav qui va permettre l'affichage des liens de navigation
const toggleNav = () => {
  menuBurger.classList.toggle("active");
  navigation.classList.toggle("active");
};

// Ecoute de l'événement "click" sur le bouton menuBurger et appel de la fonction toggleNav
menuBurger.addEventListener("click", toggleNav);
