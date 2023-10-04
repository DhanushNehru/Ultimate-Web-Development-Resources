$(document).ready(function() {
    document.querySelectorAll(".nav-link").forEach((link) => {
        if (link.hash === window.location.hash) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

    $(".navbar li a").on('click', function(event) {
        $(".navbar li a").removeClass("active");
        $(this).addClass("active");
        if(this.hash) {
            sectionTop = $(this.hash).offset().top - 132;
            $('html, body').animate({
                scrollTop: sectionTop
            }, 500);
        }
    });
});