import { navbar } from "./scripts/nav.js";
import { displayTestimonial } from "./scripts/testimonial.js";
import { displayFaq } from "./scripts/faq.js";

navbar();
displayTestimonial();
displayFaq();

// const dataSet = {
//   totalCas: 3350,
//   guerison: 19,
//   deces: 19,
//   reanimation: 19,
//   hospitalises: 232,
//   DosesInject: {
//     doseInjectFirst: 125084,
//     doseInjectSecond: 79213,
//     doseInjectthird: 875,
//   },
// };

// console.log(dataSet);

// const totalCasContainer = document.getElementById("total-cas");

// const linkToData = "/data/data.json";

// window.addEventListener("load", () => {
//   fetch(linkToData)
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         console.log(`Une erreur de type ${response.status}  est survenu ! `);
//       }
//     })
//     .then((data) => console.log(data.dailyData));
// });

// const nbDeCasToday = document.getElementById("nb-de-cas-today");

// // const dataFetcher = new dataFetcher(RECIPES);

// // const recipesList = dataFetcher.getRecipesList(dataFetcher);
