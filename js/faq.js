// Récupération de la section ayant la classe accordion
const accordionSection = document.querySelector(".accordion");

// Création de la constante faqsArray contenant les différents questions et réponses
const faqsArray = [
  {
    question: "Quel est le tarif d'une séance photo ?",
    answser:
      "Je vous propose de me contacter directement afin d'établir un devis personnalisé.",
  },
  {
    question: "Combien coûte un reportage photo/vidéo mariage ?",
    answser:
      "Différentes formules de reportage photo mariage sont proposées, à partir de 350 € la première heure. Ces tarifs sont donnés à titre indicatif. Contactez-moi afin d’établir un devis selon vos besoins exacts. Indiquez-moi le maximum d’informations sur le formulaire (date, lieu, déroulement…). Je réalise également des vidéos selon votre demande.",
  },
  {
    question: "Combien de photos vais-je recevoir ?",
    answser:
      "J’effectue une préselection des photos. Lors de votre projection privée, vous sélectionnez vos photos préférées et le type de produits souhaités (tirages, tableaux, coffret, album, fichiers numériques haute définition). Ce rendez-vous permet également de discuter ensemble des retouches attendues.",
  },
  {
    question: "Où se trouve le studio ?",
    answser:
      "Mon studio photo se trouve dans le commune d'Araules à environ 20 minutes d'Yssingeaux.",
  },
  {
    question: "Faites-vous des séances photos à domicile ou en extérieur ?",
    answser:
      "Oui, je propose des séances photos en extérieur ou chez vous. Il n’est pas nécessaire d’avoir une grande maison ultra lumineuse et bien rangée pour choisir une séance à domicile.",
  },
  {
    question: "Jusqu'où vous déplacez-vous ?",
    answser:
      "Je me déplace dans toute la région Auvergne-Rhône-Alpes mais également partout ailleurs, en France comme à l’international. Il faut bien évidemment ajouter les frais de déplacement au devis.",
  },
  {
    question: "Que se passe-t-il s'il pleut le jour de la séance ?",
    answser:
      "La plupart du temps, la météo ne pose aucun problème pour réaliser les photos. On trouve toujours le moyen de faire une belle séance même si le temps est couvert. Si le temps empêche vraiment de rester à l’extérieur (gros orages...), nous pouvons déplacer la séance en intérieur ou modifier la date.",
  },
];

console.log(faqsArray);

// Boucle for qui va parcourir le tableau faqsArray
for (let i = 0; i < faqsArray.length; i++) {
  // Création de l'élément HTML 5 <article> et ajout dans le DOM
  const articleItem = document.createElement("article");
  articleItem.setAttribute("class", "faq");
  accordionSection.appendChild(articleItem);

  // Création de l'élément HTML 5 <div> et ajout dans le DOM
  const questionDivItem = document.createElement("div");
  questionDivItem.setAttribute("class", "question");
  articleItem.appendChild(questionDivItem);

  // Création de l'élément HTML 5 <h3> et ajout dans le DOM
  const questionTitleItem = document.createElement("h3");
  questionDivItem.appendChild(questionTitleItem);
  questionTitleItem.textContent = `${faqsArray[i].question}`;
  //console.log(questionTitleItem);

  // Création de l'élément HTML 5 <i> et ajout dans le DOM
  const iconItem = document.createElement("i");
  iconItem.setAttribute("class", "fa-solid fa-chevron-down");
  questionDivItem.appendChild(iconItem);

  // Création de l'élément HTML 5 <div> et ajout dans le DOM
  const answerDivItem = document.createElement("div");
  answerDivItem.setAttribute("class", "answer");
  articleItem.appendChild(answerDivItem);

  // Création de l'élément HTML 5 <p> et ajout dans le DOM
  const paragraphItem = document.createElement("p");
  answerDivItem.appendChild(paragraphItem);
  paragraphItem.textContent = `${faqsArray[i].answser}`;
  //console.log(paragraphItem);
}

// Récupéarion des éléments HTML 5 <article>
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  // Ecoute de l'événement "click" sur l'article ayant la classe faq
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
