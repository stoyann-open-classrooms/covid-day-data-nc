function toggleMenu() {}

let burger = document.querySelector(".toggle");

burger.addEventListener("click", () => {
  let naviguation = document.querySelector(".naviguation");
  naviguation.classList.toggle("active");
});

var root = document.documentElement;
var percent = 55.16;
var percent2 = 34.62;
setTimeout(function () {
  var DOMStyle = getComputedStyle(root);
  root.style.setProperty("--nb-percent1", percent);
  root.style.setProperty("--nb-percent-str1", '"' + percent + '%"');
}, 1000);

setTimeout(function () {
  var DOMStyle = getComputedStyle(root);
  root.style.setProperty("--nb-percent2", percent2);
  root.style.setProperty("--nb-percent-str2", '"' + percent2 + '%"');
}, 1000);
