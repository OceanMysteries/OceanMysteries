const burger = document.querySelector("#burger")
const burgerpath = document.querySelector("#burger path")
const slide = document.querySelector("#Responsive-nav")



burger.addEventListener("click", () =>{
    slide.classList.toggle("active");
    burgerpath.classList.toggle("blue")
})