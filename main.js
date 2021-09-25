import { DAILYDATA } from "./data/data.js";
import { DataFetcher } from "./scripts/class/dataFetcher.js";

const dataFatcher = new DataFetcher(DAILYDATA);
const dataList = dataFatcher.getDataList(dataFatcher);

// ============================================
console.log(dataList);

// les  data du jour (dernier objet creer dans data)
let dataToday = dataList.dataList[dataList.dataList.length - 1];

console.log(dataList.getTotalDeces());
console.log(dataList.getTodayCas());
displayData();
displayGraph();

// ==================== affichage des données ===================

function displayData() {
  let nbDeCasTotalContainer = document.getElementById("nb_de_cas_total");
  let nbDeCasTodayContainer = document.getElementById("nb_de_cas_today");
  let nbDeDecesTodayContainer = document.getElementById("deces_today");
  let nbDeDecesTotalContainer = document.getElementById("deces_total");
  let nbHotelTotalContainer = document.getElementById("hotel_today");
  let nbGuerisonTotalContainer = document.getElementById("guerison_today");
  let nbDeCasReanimationContainer =
    document.getElementById("reanimation_today");
  let nbDeCashospitalisationContainer = document.getElementById(
    "hospitalisation_today"
  );

  nbDeCasTotalContainer.innerText = dataToday.cas;
  nbDeCasTodayContainer.innerText = dataList.getTodayCas();
  nbDeCashospitalisationContainer.innerText = dataToday.hospitalise;
  nbDeCasReanimationContainer.innerText = dataToday.reanimation;
  nbDeDecesTodayContainer.innerText = dataToday.deces;
  nbDeDecesTotalContainer.innerText = dataList.getTotalDeces();
  nbHotelTotalContainer.innerText = dataToday.hotel;
  nbGuerisonTotalContainer.innerText = dataToday.guerison;
}
// ==================== affichage des graphiques ===================

function displayGraph() {
  let dataSet = dataList.getAllDate();
  let dataSetCas = dataList.getAllCasByDate();
  let dataSetDeces = dataList.getAllDecesByDate();
  let dataSetHospitalisations = dataList.getAllHospitalisationsByDate();
  let dataSetReanimation = dataList.getAllReanimationsByDate();
  const graphNbDeCas = document
    .getElementById("graph-nb-de-cas")
    .getContext("2d");
  const graphNbDeDeces = document
    .getElementById("graph-nb-de-deces")
    .getContext("2d");
  const graphNbDeHospitalisations = document
    .getElementById("graph-nb-de-hospitalisations")
    .getContext("2d");
  const graphNbDeReanimation = document
    .getElementById("graph-nb-de-reanimations")
    .getContext("2d");
  let chartNbDeCas = new Chart(graphNbDeCas, {
    type: "line",
    data: {
      labels: dataSet,
      datasets: [
        {
          label: "Décès",
          data: dataSetCas,
          backgroundColor: "#7fa4e0",
          hoverBorderWidth: 4,
          hoverBackgroundColor: "#ff3939",
          tension: 0.5,
          borderColor: "#ff3939",
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,

          color: "#7fa4e0",
        },
        legend: {
          display: false,
        },
      },
    },
  });

  let chartNbDeDeces = new Chart(graphNbDeDeces, {
    type: "line",
    data: {
      labels: dataSet,
      datasets: [
        {
          label: "Cas positifs",
          data: dataSetDeces,
          backgroundColor: "#7fa4e0",
          hoverBorderWidth: 4,
          hoverBackgroundColor: "#ff3939",
          tension: 0.5,
          borderColor: "#ff3939",
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,

          color: "#7fa4e0",
        },
        legend: {
          display: false,
        },
      },
    },
  });

  let chartNbDeHospitalisations = new Chart(graphNbDeHospitalisations, {
    type: "line",
    data: {
      labels: dataSet,
      datasets: [
        {
          label: "Cas positifs",
          data: dataSetHospitalisations,
          backgroundColor: "#7fa4e0",
          hoverBorderWidth: 4,
          hoverBackgroundColor: "#ff3939",
          tension: 0.5,
          borderColor: "#ff3939",
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,

          color: "#7fa4e0",
        },
        legend: {
          display: false,
        },
      },
    },
  });
  let chartNbDeReanimation = new Chart(graphNbDeReanimation, {
    type: "line",
    data: {
      labels: dataSet,
      datasets: [
        {
          label: "Décès",
          data: dataSetReanimation,
          backgroundColor: "#7fa4e0",
          hoverBorderWidth: 4,
          hoverBackgroundColor: "#ff3939",
          tension: 0.5,
          borderColor: "#ff3939",
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,

          color: "#7fa4e0",
        },
        legend: {
          display: false,
        },
      },
    },
  });
}
