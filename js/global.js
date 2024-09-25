// Récupération des éléments HTML5
const arrowBtn = document.querySelector(".arrow__btn");
const currentYear = document.querySelector(".year");

const getCurrentYear = () => {
  // Récupération de la date actuelle
  const date = new Date();
  //console.log(date);

  // Récupération de l'année
  const year = date.getFullYear();
  //console.log(year);

  currentYear.textContent = year;
};
// Appel de la fonction getCurrentYear()
getCurrentYear();

// Ecoute de l'événement "click" sur la flèche
arrowBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
