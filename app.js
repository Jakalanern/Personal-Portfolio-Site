const dropdown = document.querySelector(".dropdown");
const burger = document.querySelector(".burger");
const burgerLabel = document.querySelector(".burger-label");
const x = document.querySelector(".x");
const site1 = document.querySelector("#item1");
const site2 = document.querySelector("#item2");
const site3 = document.querySelector("#item3");
const site4 = document.querySelector("#item4");
let clickCount = 1;

// Drop down NAV
burger.addEventListener("click", () => {
  dropdown.style.transform = "translateX(15px)";
  burger.style.transform = "translateX(800px)";
  burgerLabel.style.transform = "translateX(800px)";
  x.addEventListener("click", () => {
    dropdown.style.transform = "translateX(1000px)";
    burger.style.transform = "translateX(0px)";
    burgerLabel.style.transform = "translateX(0px)";
  });
});

// Click on site img and get redirected
site1.addEventListener("click", (e) => {
  location.href = "https://gifted-engelbart-eec196.netlify.app/";
});

site2.addEventListener("click", (e) => {
  location.href = "https://gifted-mirzakhani-853e31.netlify.app";
});

site3.addEventListener("click", (e) => {
  location.href = "https://clever-ptolemy-a1e677.netlify.app/";
});

site4.addEventListener("click", (e) => {
  location.href = "https://modest-booth-7b92f4.netlify.app/";
});
