const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

function downloadCV(event) {
  event.preventDefault();

  // Put your PDF inside assets/Dilukshi-Isanka-CV.pdf
  // Then replace this alert with:
  // window.open("assets/Dilukshi-Isanka-CV.pdf", "_blank");

  alert("Add your CV PDF to the assets folder and connect it to this button.");
}
