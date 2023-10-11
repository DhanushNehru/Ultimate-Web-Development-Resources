const top_btn = document.querySelector("#back-to-top-btn");
const shop_btn = document.querySelector("#shop_btn");


window.addEventListener("scroll", scroll);





function scroll()
{
    if(window.pageYOffset > 300)
    {
        top_btn.style.display = "block";
    }

    else{
        top_btn.style.display = "none";
    }
}


top_btn.addEventListener("click", () => {
    window.scrollTo(0, 0);
});


shop_btn.addEventListener("click", function()
{
    window.scrollTo(0, 1300);
});