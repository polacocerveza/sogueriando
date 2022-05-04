const abmata = document.getElementById("abmata");
const modal_container = document.getElementById("modal_container");
const textherrabox = document.getElementById("textherra-box");
const cierramata = document.getElementById("cierramata");

const abplana = document.getElementById("abplana");
const modal_containerp = document.getElementById("modal_containerp");
const textherrabox1 = document.getElementById("textherra-box2");
const cierraplana = document.getElementById("cierraplana");

const abredo = document.getElementById("abredo");
const modal_containerr = document.getElementById("modal_containerr");
const texherrabox2 = document.getElementById("textherra-box2");
const cierraredo = document.getElementById("cierraredo");

abmata.addEventListener("click", function (e) {
  e.preventDefault;
  modal_container.style.opacity = "1";
  modal_container.style.visibility = "visible";
  modal_container.classList.toggle("textherra-box");
});

cierramata.addEventListener("click", function (e) {
  modal_container.style.opacity = "0";
  modal_container.style.visibility = "hidden";
  modal_container.classList.toggle("textherra-box");
});

abplana.addEventListener("click", function (e) {
  e.preventDefault;
  modal_containerp.style.opacity = "1";
  modal_containerp.style.visibility = "visible";
  modal_containerp.classList.toggle("textherra-box1");
});

cierraplana.addEventListener("click", function (e) {
  modal_containerp.style.opacity = "0";
  modal_containerp.style.visibility = "hidden";
  modal_containerp.classList.toggle("textherra-box1");
});
abredo.addEventListener("click", function (e) {
  e.preventDefault;
  modal_containerr.style.opacity = "1";
  modal_containerr.style.visibility = "visible";
  modal_containerr.classList.toggle("textherra-box2");
});

cierraredo.addEventListener("click", function (e) {
  modal_containerr.style.opacity = "0";
  modal_containerr.style.visibility = "hidden";
  modal_containerr.classList.toggle("textherra-box2");
});
