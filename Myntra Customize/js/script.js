document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.hash === window.location.hash) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});

$(".navbar li a").on('click', function (event) {
    $(".navbar li a").removeClass("active");
    $(this).addClass("active");
    if (this.hash) {
        sectionTop = $(this.hash).offset().top;
        $('html, body').animate({
            scrollTop: sectionTop
        }, 500);
    }
});

/*Scroll to top Button*/
var goToTop = $('#GoToTopButton');
$(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
        goToTop.addClass('showScrollTopButton');
    } else {
        goToTop.removeClass('showScrollTopButton');
    }
});
goToTop.on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});

var navigationList = [];
$(".nav-link").each(function(i){
    var thisLink = $(this);
    var thisId = thisLink.attr('href');
    //var thisTarget = $(""+thisId);
    navigationList.push({
        'anchor': thisLink,
        'id': thisId
        //"target": thisTarget
    });
});

const sections=document.querySelectorAll("section");

$(window).on('scroll', function (e) {
    let current= "";
        
    sections.forEach((section)=>{
        const sectionTop=section.offsetTop;
        const scrollY=window.pageYOffset;
        if ( scrollY >= sectionTop - 132 ){
            current = section.getAttribute("id");
        };
    });
    history.replaceState(null,null, window.location.pathname+"#"+current);
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
        if (link.hash === window.location.hash) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
});

