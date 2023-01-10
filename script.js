const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

burger.addEventListener("click", () => {
  console.log("ajsdhgds");
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
  bar1.classList.toggle("active");
  bar2.classList.toggle("active");
  bar3.classList.toggle("active");
});

document.querySelectorAll(".nav-child").forEach((n) =>
  n.addEventListener("click", () => {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
    bar1.classList.remove("active");
    bar2.classList.remove("active");
    bar3.classList.remove("active");
  })
);
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("aktiv");
    } else {
      reveals[i].classList.remove("aktiv");
    }
  }
}
// for at tjekke scroll position på load
reveal();
window.addEventListener("scroll", slide);
function slide() {
  var reveals = document.querySelectorAll(".skillnone");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("skill");
    } else {
      reveals[i].classList.remove("skill");
    }
  }
}
// for at tjekke scroll position på load
slide();
