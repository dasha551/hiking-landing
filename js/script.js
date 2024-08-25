const btns = document.querySelectorAll(".nav__btn");
const slides = document.querySelectorAll(".video__slide");

const sliderNav = function(manual) {
    btns.forEach((btn)=>{
        btn.classList.remove("active")
    });

    slides.forEach((slides)=>{
        slides.classList.remove("active")
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");

}
btns.forEach((btn, i) => {
    btn.addEventListener("click", () =>{
        sliderNav(i);
    });
});