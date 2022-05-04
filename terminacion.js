const ablise = document.getElementById("ablise");
const modal_containerl = document.getElementById("modal_containerl");
const textherrabox5 = document.getElementById("textherra-box5");
const cierralise = document.getElementById("cierralise");

ablise.addEventListener("click", function (e) {
  e.preventDefault;
  modal_containerl.style.opacity = "1";
  modal_containerl.style.visibility = "visible";
  modal_containerl.classList.toggle("textherra-box5");
  });

cierralise.addEventListener("click", function (e) {
  modal_containerl.style.opacity = "0";
  modal_containerl.style.visibility = "hidden";
  modal_containerl.classList.toggle("textherra-box5");
  });

