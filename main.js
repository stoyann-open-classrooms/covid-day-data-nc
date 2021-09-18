import { navbar } from "./scripts/nav.js";

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

navbar();

// actualités

const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Bilan sanitaires",
    position: "MAJ 17.09.2021",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfUdy9QfrALjHC7MfKsKZ5sqAszYmNZvj3sl8cMPF0pqbR7vigV-qsjhtH7maMeS4Csk&usqp=CAU",
    text: "2886 cas positifs  avérés, 14 décès,211 patients hospitalisés,80 personnes sont déjà placées en hôtel,8 personnes guéries depuis le 06.09.21 ",
  },

  {
    name: "Louis Mapou président du 17eme gouvernement",
    position: "point presse du 17.09.2021",
    photo:
      "https://i1.wp.com/www.radio1.pf/cms/wp-content/uploads/2021/07/Louis-Mapou.jpg?fit=800%2C511&ssl=1",
    text: " 8 personnes guérieLe virus ne circule pas seul, il se transmet d’individus à individus, sans distinction, quel que soit votre âge et votre état de santé. » Louis Mapou ",
  },
  {
    name: "Louis Mapou président du 17eme gouvernement",
    position: "point presse du 17.09.2021",
    photo:
      "https://i1.wp.com/www.radio1.pf/cms/wp-content/uploads/2021/07/Louis-Mapou.jpg?fit=800%2C511&ssl=1",
    text: "29 patients en réanimation (la grande majorité n’est pas vaccinée)",
  },
  {
    name: "?????",
    position: "??????",
    photo:
      "https://i1.wp.com/www.radio1.pf/cms/wp-content/uploads/2021/07/Louis-Mapou.jpg?fit=800%2C511&ssl=1",
    text: "⚠️ PROLONGEMENT DU CONFINEMENT STRICT JUSQU’AU 4 OCTOBRE À MINUIT ‼️ Les mêmes règles de confinement seront appliquées (restrictions, contrôles, couvre-feu…)",
  },
  {
    name: "Louis Mapou président du 17eme gouvernement",
    position: "point presse du 17.09.2021",
    photo:
      "https://i1.wp.com/www.radio1.pf/cms/wp-content/uploads/2021/07/Louis-Mapou.jpg?fit=800%2C511&ssl=1",
    text: " « Chaque déplacement inutile, chaque contact non essentiel est susceptible d’accélérer la circulation du virus, jusque dans les vallées les plus reculées de la NC.»",
  },
  {
    name: "Louis Mapou président du 17eme gouvernement",
    position: "point presse du 17.09.2021",
    photo:
      "https://i1.wp.com/www.radio1.pf/cms/wp-content/uploads/2021/07/Louis-Mapou.jpg?fit=800%2C511&ssl=1",
    text: "« Je vous demande d’aller vous faire vacciner ou tester car l’objectif est que que nous soyons tous immunisés contre ce virus. Faites-le dans le respect des gestes barrières et de la distanciation sociale.",
  },
  {
    name: "Louis Mapou président du 17eme gouvernement",
    position: "point presse du 17.09.2021",
    photo:
      "https://i1.wp.com/www.radio1.pf/cms/wp-content/uploads/2021/07/Louis-Mapou.jpg?fit=800%2C511&ssl=1",
    text: "« La situation que nous endurons désormais confirme que la vaccination est le meilleure moyen, voire le seul aujourd’hui, de se protéger contre les formes graves du Covid-19 et donc de préserver nos vies et nos capacités hospitalières du variant DELTA. »",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
