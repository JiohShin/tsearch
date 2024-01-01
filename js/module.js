// header menu
const menuBtn = document.querySelector(".menu_btn");
const body = document.querySelector("body");
const header = document.querySelector("header");

menuBtn.addEventListener("click", function () {
  if (header.classList.contains("active") === false) {
    header.classList.add("active");
    body.classList.add("active");
  } else {
    header.classList.remove("active");
    body.classList.remove("active");
  }
});

header.addEventListener("click", function () {
  if (this.classList.contains("active") === true) {
    this.classList.remove("active");
    body.classList.remove("active");
  }
});

// group modal
// const groupBtn = document.querySelector('.group_make_btn');
// const groupModal = document.querySelector('.modal_group_register-wrap');
// const modalCloseBtn = document.querySelector('.close_btn');

// groupBtn.addEventListener('click', function() {
//     groupModal.style.display = 'block';
// })
// modalCloseBtn.addEventListener('click', function() {
//     groupModal.style.display = 'none';
// })
