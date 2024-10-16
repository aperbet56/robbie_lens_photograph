// Récupération des différents éléments
const testimonialContainer = document.querySelector(".testimonials");
const testimonial = document.querySelector(".testimonial");
const userImg = document.querySelector(".user__img");
const username = document.querySelector(".username");
const userNote = document.querySelector(".note");

// Création de la constante testimonials contenant les différents témoignages
const testimonials = [
  {
    name: "Carole Blanc",
    note: "4.5/5",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text: "Très bonne photographe, très professionnelle, tout en étant dans l'échange humain. De plus, elle est très drôle. On a passé un super moment. Je la conseille fortement !",
  },
  {
    name: "Emilie Vidal",
    note: "5/5",
    photo: "https://randomuser.me/api/portraits/women/43.jpg",
    text: "Photographe passionnée par son métier qui est très compétente, accueillant et disponible. Je la recommande fortement !",
  },
  {
    name: "Noémie Fabre",
    note: "4/5",
    photo: "https://randomuser.me/api/portraits/women/50.jpg",
    text: "Photographe très agréable même avec les enfants et on repart avec les photos. Rapide, efficace et les prix sont abordables !",
  },
  {
    name: "Etienne Collard",
    note: "5/5",
    photo: "https://randomuser.me/api/portraits/men/35.jpg",
    text: "Personne très professionnelle, à l'écoute de nos attentes, de très bons conseils apportés. Je la recommande à 1000 % !!",
  },
  {
    name: "Jérémy Garnier",
    note: "4.5/5",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "Photographe passionnée par son métier, super sympa, très sérieuse ! Elle est toujours disponible pour vous et vous propose de magnifiques clichés.",
  },
  {
    name: "Paris Girard",
    note: "5/5",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "Belle expérience avec une vraie professionnelle de la photographie. Un grand merci à Robbie pour son professionnalisme, sa disponibilité et surtout pour ses magnifiques photos .",
  },
  {
    name: "Lilian Tardy",
    note: "4.5/5",
    photo: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "Accueil convivial et photographe au top, a su nous mettre à l'aise et à l'écoute. Rapidité pour avoir nos photos. Je recommande en tout point.",
  },
];

// Création de la variable index
let index = 1;

// Déclaration de la fonction updateTestimonials qui va permettre l'affichage des différents témoignages
const updateTestimonial = () => {
  const { name, note, photo, text } = testimonials[index];
  testimonial.textContent = text;
  userImg.src = photo;
  username.textContent = name;
  userNote.textContent = note;

  // Incrémentation de l'index
  index++;

  if (index > testimonials.length - 1) {
    index = 0;
  }
};

// La méthode setInterval() appelle à plusieurs reprises la fonction updateTestimonial avec un délai fixe ici (1000ms) entre chaque appel de cette fonction.
setInterval(updateTestimonial, 10000);
