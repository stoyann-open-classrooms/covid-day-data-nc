import { DAILYDATA } from "./data/data.js";
import { DataFetcher } from "./scripts/class/dataFetcher.js";

const dataFatcher = new DataFetcher(DAILYDATA);
const dataList = dataFatcher.getDataList(dataFatcher);

// ============================================

// dataList.dataList.forEach((el) => {
//   console.log(el);
// });
let dataToday = dataList.dataList[dataList.dataList.length - 1];
displayTodayData();

// affiche les donnees du jour sur la page
function displayTodayData() {
  const totalCasContainer = document.getElementById("total-cas");
  const totalDecesContainer = document.getElementById("total-deces");
  const todayCasContainer = document.getElementById("today-cas");
  const reanimationContainer = document.getElementById("reanimation");
  const todayDecesContainer = document.getElementById("today-deces");
  const todayGuerisonContainer = document.getElementById("guerison");
  const firstDoseContainer = document.getElementById("first-dose");
  const secondDoseContainer = document.getElementById("second-dose");
  const thirdDoseContainer = document.getElementById("third-dose");
  const totalDoseContainer = document.getElementById("total-dose-inject");
  const hotelContainer = document.getElementById("hotel");
  const todayHospitalisationContainer =
    document.getElementById("hospitalisation");
  console.log(dataToday);
  // affiche les donees sur la page
  totalCasContainer.innerText = dataList.getTotalCas();
  totalDecesContainer.innerText = dataList.getTotalDeces();
  todayCasContainer.innerText = dataToday.cas;
  reanimationContainer.innerText = dataToday.reanimation;
  todayDecesContainer.innerText = dataToday.deces;
  todayHospitalisationContainer.innerText = dataToday.hospitalise;
  todayGuerisonContainer.innerText = dataToday.guerison;
  firstDoseContainer.innerText = dataToday.dosesInjecteesDuJour.first;
  secondDoseContainer.innerText = dataToday.dosesInjecteesDuJour.second;
  thirdDoseContainer.innerText = dataToday.dosesInjecteesDuJour.third;
  hotelContainer.innerText = dataToday.hotel;
  totalDoseContainer.innerText = dataToday.getTotalInjectDay();
}
const shemaVAccToday = [
  dataToday.statuVAccinalCasPositifs.nonVaccine,
  dataToday.statuVAccinalCasPositifs.complet,
  dataToday.statuVAccinalCasPositifs.uneDose,
];

const dataSetCas = dataList.getDatasetCas();
const dataSetDeces = dataList.getDatasetDeces();
const dataSetHospitalisation = dataList.getDatasetHospitalisation();
const dataSetTotalDoseInjectDay = dataList.getDatasetTotalDoseInject();
const dataSetDate = dataList.getDatasetDate();
const dataSetReanimation = dataList.getDatasetReanimation();
console.log(dataSetDate);
console.log(dataSetCas);
console.log(dataSetDeces);
console.log(dataSetHospitalisation);
console.log(dataSetTotalDoseInjectDay);
console.log(dataSetReanimation);

// ===========================================================================================

const graph = document.getElementById("graph").getContext("2d");
const graph2 = document.getElementById("graph2").getContext("2d");
const graph3 = document.getElementById("graph3").getContext("2d");
const graph4 = document.getElementById("graph4").getContext("2d");
const graph5 = document.getElementById("graph5").getContext("2d");
const shemaVacc = document.getElementById("shemaVacc").getContext("2d");
let myChart = new Chart(graph, {
  type: "line",
  data: {
    labels: dataSetDate,
    datasets: [
      {
        label: "Cas positifs",
        data: dataSetCas,
        backgroundColor: "#7fa4e0",
        hoverBorderWidth: 4,
        hoverBackgroundColor: "#ff3939",
        tension: 0.5,
        borderColor: "tomato",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Nombre de nouveaux cas positifs",
        color: "#7fa4e0",
      },
      legend: {
        display: false,
      },
    },
  },
});
let myChart2 = new Chart(graph2, {
  type: "line",
  data: {
    labels: dataSetDate,
    datasets: [
      {
        label: "Décès ",
        data: dataSetDeces,
        backgroundColor: "#7fa4e0",
        hoverBorderWidth: 4,

        hoverBackgroundColor: "#ff3939",
        tension: 0.5,
        borderColor: "tomato",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Nombre de décès par jour",
        color: "#7fa4e0",
      },
      legend: {
        display: false,
      },
    },
  },
});
let myChart3 = new Chart(graph3, {
  type: "line",
  data: {
    labels: dataSetDate,
    datasets: [
      {
        label: "doses injectées",
        data: dataSetTotalDoseInjectDay,
        backgroundColor: "#7fa4e0",

        hoverBorderWidth: 4,
        hoverBackgroundColor: "#ff3939",
        tension: 0.5,
        borderColor: "tomato",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Nombre total de doses de vaccin injectées ",
        color: "#7fa4e0",
      },
      legend: {
        display: false,
      },
    },
  },
});
let myChart4 = new Chart(graph4, {
  type: "line",
  data: {
    labels: dataSetDate,
    datasets: [
      {
        label: "personnes hospitalisé en unité COVID",
        data: dataSetHospitalisation,
        backgroundColor: "#7fa4e0",
        hoverBorderWidth: 4,
        hoverBackgroundColor: "#ff3939",
        tension: 0.5,
        borderColor: "tomato",
        hoverBackgroundColor: "#ff3939",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Nombre de personnes hospitalisé en unité COVID",
        color: "#7fa4e0",
      },
      legend: {
        display: false,
      },
    },
  },
});
let myChart5 = new Chart(graph5, {
  type: "line",
  data: {
    labels: dataSetDate,
    datasets: [
      {
        label: "personnes en réanimation",
        data: dataSetReanimation,
        backgroundColor: "#7fa4e0",

        hoverBorderWidth: 4,
        hoverBackgroundColor: "#ff3939",
        hoverBackgroundColor: "#ff3939",
        tension: 0.5,
        borderColor: "tomato",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Nombre de personnes en réanimation",
        color: "#7fa4e0",
      },
      legend: {
        display: false,
      },
      layout: {
        top: 100,
      },
    },
  },
});
let myChart6 = new Chart(shemaVacc, {
  type: "doughnut",
  data: {
    labels: ["non vacciné", "shéma vaccinal complet", "une dose"],

    datasets: [
      {
        label: "Shéma vaccinal Cas positifs",
        data: shemaVAccToday,
        backgroundColor: ["#ff3939", "#68d9a4", "#fd772a"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Shéma vaccinal des cas positifs en %",
      },
      legend: {
        display: true,
      },
    },
  },
});
let burger = document.querySelector(".toggle");

burger.addEventListener("click", () => {
  let naviguation = document.querySelector(".naviguation");
  naviguation.classList.toggle("active");
});

let root = document.documentElement;

timeVac(dataToday.statuVAccinalCasPositifs.nonVaccine);
timeVac2(dataToday.statuVAccinalCasPositifs.complet);
timeVac3(dataToday.statuVAccinalCasPositifs.uneDose);
time2(dataToday.AvanceVaccinationPopVacinables.second);
time(dataToday.AvanceVaccinationPopVacinables.first);
function time(percentValue) {
  setTimeout(function () {
    let DOMStyle = getComputedStyle(root);
    root.style.setProperty("--nb-percent", percentValue);
    root.style.setProperty("--nb-percent-str", '"' + percentValue + '%"');
  }, 1000);
}
function time2(percentValue) {
  setTimeout(function () {
    let DOMStyle = getComputedStyle(root);
    root.style.setProperty("--nb-percent2", percentValue);
    root.style.setProperty("--nb-percent-str2", '"' + percentValue + '%"');
  }, 1000);
}

function timeVac(percentValue) {
  setTimeout(function () {
    let DOMStyle = getComputedStyle(root);
    root.style.setProperty("--nb-percent3", percentValue);
    root.style.setProperty("--nb-percent-str3", '"' + percentValue + '%"');
  }, 1000);
}

function timeVac2(percentValue) {
  setTimeout(function () {
    let DOMStyle = getComputedStyle(root);
    root.style.setProperty("--nb-percent4", percentValue);
    root.style.setProperty("--nb-percent-str4", '"' + percentValue + '%"');
  }, 1000);
}

function timeVac3(percentValue) {
  setTimeout(function () {
    let DOMStyle = getComputedStyle(root);
    root.style.setProperty("--nb-percent4", percentValue);
    root.style.setProperty("--nb-percent-str5", '"' + percentValue + '%"');
  }, 1000);
}
