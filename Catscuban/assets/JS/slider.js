const slider = document.querySelector(".slider");
const next_btn = document.querySelector(".next-btn");
const prev_btn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slide_icon = document.querySelectorAll(".slide-icon");
const numberofslides = slides.length;
var slideNumber = 0;

//Slider next button

next_btn.addEventListener("click", function()
{
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slide_icon.forEach((icon) => {
        icon.classList.remove("active");
    });

slideNumber++;

if(slideNumber > (numberofslides - 1))
{
    slideNumber = 0;
}

slides[slideNumber].classList.add("active");
slide_icon[slideNumber].classList.add("active");

});

// Slider prev button

prev_btn.addEventListener("click", function()
{
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });


    slide_icon.forEach((icon) => {
        icon.classList.remove("active");
    });

    slideNumber--;

if(slideNumber < 0)
{
    slideNumber = numberofslides - 1;
}

slides[slideNumber].classList.add("active");
slide_icon[slideNumber].classList.add("active");

});

//autoplay slider

var play_slider;

var repeat = () => {
    play_slider = setInterval(function()
    {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        slide_icon.forEach((icon) => {
            icon.classList.remove("active");
        });

        slideNumber++;

        if(slideNumber > (numberofslides - 1))
        {
            slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
        slide_icon[slideNumber].classList.add("active");
    }, 4000);
}

repeat();

//Stop slider on mouseover

slider.addEventListener("mouseover", () => {
    clearInterval(play_slider);
});

// Resume slider on mouseout

slider.addEventListener("mouseout", () => {
    repeat();
});