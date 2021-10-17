const dropdown = document.querySelector(".dropdown");
const burger = document.querySelector(".burger");
const burgerLabel = document.querySelector(".burger-label")
const x = document.querySelector(".x")
let clickCount = 1;



// Dropdown pops in instead of drops
// burger.addEventListener("click", () => {
//     clickCount++;
//     if (clickCount % 2 === 0) {
//         dropdown.style.transform = "scaleX(1) scaleY(1)"
//         dropdown.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 1, 1)"
//         dropdown.style.transitionDuration = "75ms"
//         dropdown.style.opacity = "1"
//     } else {
//         dropdown.style.transform = "scaleX(0) scaleY(0)"
//         dropdown.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)"
//         dropdown.style.transitionDuration = "100ms"
//         dropdown.style.opacity = "0"
//     }
// })

// Drops down and has a little bounce at the end
burger.addEventListener("click", () => {
    dropdown.style.transform = "translateX(15px)"
    burger.style.transform = "translateX(800px)"
    burgerLabel.style.transform = "translateX(800px)"
    x.addEventListener("click", () => {
        dropdown.style.transform = "translateX(1000px)"
        burger.style.transform = "translateX(0px)"
        burgerLabel.style.transform = "translateX(0px)"
    })

})