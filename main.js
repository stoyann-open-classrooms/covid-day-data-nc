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
    name: "Sébastien Lecornu - Ministre des outres-mer",
    position: "Facebook-10 septembre 2021",
    photo:
      "https://scontent.fnou1-1.fna.fbcdn.net/v/t1.6435-9/182012891_1454220651576489_306614378963551604_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ECEOXtYvRE4AX-9l0Ye&_nc_ht=scontent.fnou1-1.fna&oh=9ac2e85ec83dceb7ff3cc9d52d77c001&oe=616C665D",
    text: "un décret en conseil des ministres a placé la Nouvelle-Calédonie en état d’urgence sanitaire et un #confinement a été décidé avec l’ensemble des acteurs institutionnels.",
  },

  {
    name: "Nicolas Metzdorf Maire de la Foa-",
    position: "Facebook -14/09/2021",
    photo:
      "https://scontent.fnou1-1.fna.fbcdn.net/v/t1.6435-9/107004592_3080681845379700_1001833466241717244_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=c_-Jl_Iou54AX9vFY8S&_nc_ht=scontent.fnou1-1.fna&oh=293a84dd5548a49cd26b646cf18a6a66&oe=616C09C1",
    text: "L'hôpital sera bientôt saturé, notre système de soin va se dégrader, un tri dans les patients se fera sûrement dans les prochains jours et la grande majorité des malades ne sera pas vaccinée.",
  },
  {
    name: "Sonia Backes Présidente de la Province Sud",
    position: "Facebook -18/09/2021",
    photo:
      "https://scontent.fnou1-1.fna.fbcdn.net/v/t1.6435-9/123655823_3551165464969712_6168552217871380076_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=LGEk5Ffh2C0AX9XNiYs&_nc_ht=scontent.fnou1-1.fna&oh=a1154ed89dbe196a2b9cebb8367088e4&oe=6169D639",
    text: "Tout mon soutien aux équipes du Medipole qui gèrent une crise sans précédent.",
  },
  {
    name: "Louis Mapou président du 17eme gouvernement",
    position: "point presse du 17.09.2021",
    photo:
      "https://i1.wp.com/www.radio1.pf/cms/wp-content/uploads/2021/07/Louis-Mapou.jpg?fit=800%2C511&ssl=1",
    text: " 8 personnes guérieLe virus ne circule pas seul, il se transmet d’individus à individus, sans distinction, quel que soit votre âge et votre état de santé. » ",
  },
  {
    name: "Nicolas Metzdorf- Maire de la Foa",
    position: "Facebook -14/09/2021",
    photo:
      "https://scontent.fnou1-1.fna.fbcdn.net/v/t1.6435-9/107004592_3080681845379700_1001833466241717244_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=c_-Jl_Iou54AX9vFY8S&_nc_ht=scontent.fnou1-1.fna&oh=293a84dd5548a49cd26b646cf18a6a66&oe=616C09C1",
    text: "Se vacciner c'est se protéger soi mais c'est aussi protéger tout le système de santé et donc les autres. Vaccinez-vous, s'il vous plaît.",
  },
  {
    name: "Sonia Backes Présidente de la Province Sud",
    position: "Facebook -18/09/2021",
    photo:
      "https://scontent.fnou1-1.fna.fbcdn.net/v/t1.6435-9/123655823_3551165464969712_6168552217871380076_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=LGEk5Ffh2C0AX9XNiYs&_nc_ht=scontent.fnou1-1.fna&oh=a1154ed89dbe196a2b9cebb8367088e4&oe=6169D639",
    text: "Les tests sont possibles désormais tous les jours et sans attente à l’arène du Sud Et n’oubliez pas, faites vous vacciner. Sur les personnes en réanimation, 1 seule vaccinée Tous les décès de ces 3 derniers jours étaient des personnes non vaccinées",
  },
  {
    name: "Louis Mapou président du 17eme gouvernement",
    position: "point presse du 17.09.2021",
    photo:
      "https://i1.wp.com/www.radio1.pf/cms/wp-content/uploads/2021/07/Louis-Mapou.jpg?fit=800%2C511&ssl=1",
    text: "29 patients en réanimation (la grande majorité n’est pas vaccinée)",
  },
  {
    name: "Sébastien Lecornu - Ministre des outres-mer",
    position: "Facebook",
    photo:
      "https://scontent.fnou1-1.fna.fbcdn.net/v/t1.6435-9/182012891_1454220651576489_306614378963551604_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ECEOXtYvRE4AX-9l0Ye&_nc_ht=scontent.fnou1-1.fna&oh=9ac2e85ec83dceb7ff3cc9d52d77c001&oe=616C665D",
    text: "Des jours compliqués s'annoncent mais la solidarité nationale sera au rendez-vous.",
  },

  {
    name: "?????",
    position: "??????",
    photo:
      "https://i1.wp.com/www.radio1.pf/cms/wp-content/uploads/2021/07/Louis-Mapou.jpg?fit=800%2C511&ssl=1",
    text: "PROLONGEMENT DU CONFINEMENT STRICT JUSQU’AU 4 OCTOBRE À MINUIT ‼️  Prolongement du confinement strict jusqu'au 4 Octobre a minuit .Les mêmes règles de confinement seront appliquées (restrictions, contrôles, couvre-feu…)",
  },
  {
    name: "Louis Mapou président du 17eme gouvernement",
    position: "point presse du 17.09.2021",
    photo:
      "https://i1.wp.com/www.radio1.pf/cms/wp-content/uploads/2021/07/Louis-Mapou.jpg?fit=800%2C511&ssl=1",
    text: " « Chaque déplacement inutile, chaque contact non essentiel est susceptible d’accélérer la circulation du virus, jusque dans les vallées les plus reculées de la NC.»",
  },
  {
    name: "Christopher Gyges Membre du gouvernement de la Nouvelle Caledonie",
    position: "Facebook -14/09/2021",
    photo:
      "https://scontent.fnou1-1.fna.fbcdn.net/v/t1.6435-9/160518905_10157564170541394_3205486968565426329_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=8SB9ih8MpqQAX-zZTIB&_nc_ht=scontent.fnou1-1.fna&oh=735b942ddde6f69382051303fd5f2006&oe=616B8AEC",
    text: "Les mesures de confinement strict sont là pour protéger la santé des Calédoniens mais celles-ci nous imposent de prendre rapidement des dispositions pour protéger l’emploi et les entreprises.",
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

  {
    name: "Christopher Gyges Membre du gouvernement de la Nouvelle Caledonie",
    position: "Facebook -14/09/2021",
    photo:
      "https://scontent.fnou1-1.fna.fbcdn.net/v/t1.6435-9/160518905_10157564170541394_3205486968565426329_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=8SB9ih8MpqQAX-zZTIB&_nc_ht=scontent.fnou1-1.fna&oh=735b942ddde6f69382051303fd5f2006&oe=616B8AEC",
    text: "L’Etat a déjà annoncé que le fonds de solidarité sera  réactivé pour les entreprises et les patentés. Les provinces annonceront prochainement également leurs dispositifs d’aides qui viendront notamment en soutien aux plus petites structures. ",
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

setInterval(updateTestimonial, 5000);
