function toggleMenu() {}

let burger = document.querySelector(".toggle");

burger.addEventListener("click", () => {
  let naviguation = document.querySelector(".naviguation");
  naviguation.classList.toggle("active");
});

var root = document.documentElement;
var percent = 22;
timeVac(72.89);
timeVac2(14.96);
timeVac3(11.96);
time2(34.62);
time(55.16);
function time(percentValue) {
  setTimeout(function () {
    var DOMStyle = getComputedStyle(root);
    root.style.setProperty("--nb-percent", percentValue);
    root.style.setProperty("--nb-percent-str", '"' + percentValue + '%"');
  }, 1000);
}
function time2(percentValue) {
  setTimeout(function () {
    var DOMStyle = getComputedStyle(root);
    root.style.setProperty("--nb-percent2", percentValue);
    root.style.setProperty("--nb-percent-str2", '"' + percentValue + '%"');
  }, 1000);
}

function timeVac(percentValue) {
  setTimeout(function () {
    var DOMStyle = getComputedStyle(root);
    root.style.setProperty("--nb-percent3", percentValue);
    root.style.setProperty("--nb-percent-str3", '"' + percentValue + '%"');
  }, 1000);
}

function timeVac2(percentValue) {
  setTimeout(function () {
    var DOMStyle = getComputedStyle(root);
    root.style.setProperty("--nb-percent4", percentValue);
    root.style.setProperty("--nb-percent-str4", '"' + percentValue + '%"');
  }, 1000);
}

function timeVac3(percentValue) {
  setTimeout(function () {
    var DOMStyle = getComputedStyle(root);
    root.style.setProperty("--nb-percent4", percentValue);
    root.style.setProperty("--nb-percent-str5", '"' + percentValue + '%"');
  }, 1000);
}
