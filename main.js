import { DAILYDATA } from "./data/data.js";
import { DataFetcher } from "./scripts/class/dataFetcher.js";

const dataFatcher = new DataFetcher(DAILYDATA);
const dataList = dataFatcher.getDataList(dataFatcher);

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

const dataSetCas = dataList.getDatasetCas();
const dataSetDeces = dataList.getDatasetDeces();
const dataSetHospitalisation = dataList.getDatasetHospitalisation();
const dataSetTotalDoseInjectDay = dataList.getDatasetTotalDoseInject();
// console.log(dataSetCas);
// console.log(dataSetDeces);
// console.log(dataSetHospitalisation);
// console.log(dataSetTotalDoseInjectDay);

// ===========================================================================================
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
