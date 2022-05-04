const absaca = document.getElementById("absaca");
const modal_containers = document.getElementById("modal_containers");
const textherrabox3 = document.getElementById("textherra-box3");
const cierrasaca = document.getElementById("cierrasaca");

const abcutt = document.getElementById("abcutt");
const modal_containerc = document.getElementById("modal_containerc");
const texherrabox4 = document.getElementById("textherra-box4");
const cierracutt = document.getElementById("cierracutt");

absaca.addEventListener("click", function (e) {
  e.preventDefault;
  modal_containers.style.opacity = "1";
  modal_containers.style.visibility = "visible";
  modal_containers.classList.toggle("textherra-box3");
  });

cierrasaca.addEventListener("click", function (e) {
  modal_containers.style.opacity = "0";
  modal_containers.style.visibility = "hidden";
  modal_containers.classList.toggle("textherra-box3");
  });

abcutt.addEventListener("click", function (e) {
  e.preventDefault;
  modal_containerc.style.opacity = "1";
  modal_containerc.style.visibility = "visible";
  modal_containerc.classList.toggle("textherra-box4");
});

cierracutt.addEventListener("click", function (e) {
  modal_containerc.style.opacity = "0";
  modal_containerc.style.visibility = "hidden";
  modal_containerc.classList.toggle("textherra-box4");
});
