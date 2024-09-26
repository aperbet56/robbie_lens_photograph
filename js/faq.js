// Récupéarion des éléments HTML 5 <article>
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  // Ecoute de l'événement "click" sur l'article ayant la classe faq
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
