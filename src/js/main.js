/* Mobile Menu */
const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

const myModal = document.querySelector('.modal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


