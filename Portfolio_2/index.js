
// ==================================================
// Creating a responsive navbar
// ==================================================

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {

    headerElem.classList.toggle("active");

});

// ========================================
// sticky navigation
// ======================================== 

const heroSection = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        !ent.isIntersecting
            ? document.body.classList.add("sticky")
            : document.body.classList.remove("sticky");
    },
    {
        // viewport
        root: null,
        threshold: 0,
        // rootMargin: "-100px",
    }
);

observer.observe(heroSection);


// ==================================================
// Creating a portfolio tabbed CompositionEvent
// ==================================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");

    //to find number in data attributes

    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)

    p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

    img_active.forEach((curElem) =>
        curElem.classList.remove("p-image-not-active")
    );


});


// ==================================================
//              Scroll to top button section
// ==================================================

//without HTML

// const heroSection = document.querySelector(".section-hero");

const footerElem = document.querySelector(".section-footer");

const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scroollElement);

const scrollTop = () => {
    heroSection.scrollIntoView({ behavior: "smooth" });
};

scroollElement.addEventListener("click", scrollTop);



