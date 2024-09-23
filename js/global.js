// Récupération des éléments HTML5
const arrowBtn = document.querySelector(".arrow__btn");

// Ecoute de l'événement "click" sur la flèche
arrowBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
