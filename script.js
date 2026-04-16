// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
    .scrollIntoView({behavior:"smooth"});
  });
});

// Slider
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(()=>{
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
},3000);