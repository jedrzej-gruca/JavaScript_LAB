function autoSlide() {
    setInterval(() => {
        slide(getActiveSlideIndex() + 1);
    }, 5000);
}

window.addEventListener("load", () => {
    autoSlide();

    const dots = document.querySelectorAll(".dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", () => slide(i));
    }
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    prevButton.addEventListener("click", () => slide(getActiveSlideIndex() - 1));
    nextButton.addEventListener("click", () => slide(getActiveSlideIndex() + 1));
})

let isCurrentSlide = false;

function slide(toIndex) {
    if (isCurrentSlide)
        return;
    isCurrentSlide = true;

    const slides = Array.from(document.querySelectorAll(".slide"));
    const activeSlide = document.querySelector(".activeSlide");
    const activeSlideIndex = slides.indexOf(activeSlide);
    let newActiveSlide = null;

    if (toIndex > activeSlideIndex) {
        if (toIndex >= slides.length) {
            toIndex = 0;
        }

        newActiveSlide = slides[toIndex];
        newActiveSlide.classList.add("nextPosition");
        setTimeout(() => {
            newActiveSlide.classList.add("nextSlide");
            activeSlide.classList.add("nextSlide");
        }, 20);
    } else {
        if (toIndex < 0) {
            toIndex = slides.length - 1;
        }

        newActiveSlide = slides[toIndex];
        newActiveSlide.classList.add("prevPosition");
        setTimeout(() => {
            newActiveSlide.classList.add("prevSlide");
            activeSlide.classList.add("prevSlide");
        }, 20);
    }

    newActiveSlide.addEventListener("transitionend", () => {
        activeSlide.className = "slide";
        newActiveSlide.className = "slide activeSlide";
        isCurrentSlide = false;
    }, {
        once: true
    });
    slideIndicator(toIndex);
}

function getActiveSlideIndex() {
    const slides = Array.from(document.querySelectorAll(".slide"));
    const activeSlide = document.querySelector(".activeSlide");
    return slides.indexOf(activeSlide);
}

function slideIndicator(toIndex) {
    const dots = document.querySelectorAll(".dot");
    const dotActive = document.querySelector(".activeDot");
    const newDotActive = dots[toIndex];

    dotActive.classList.remove("activeDot");
    newDotActive.classList.add("activeDot");
}