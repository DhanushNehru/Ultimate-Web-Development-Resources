var pop_view = document.querySelectorAll(".popup-view");
var pop_btn = document.querySelectorAll(".popup-btn");
var close_btn = document.querySelectorAll(".close-btn");


//Popup

var popup = function(popup_click)
{
    pop_view[popup_click].classList.add("active");
}

pop_btn.forEach((popupbtns, i) => {
    popupbtns.addEventListener("click", () => {
        popup(i);
    });
});


//close

close_btn.forEach(close => {
    close.addEventListener("click", () => {
        pop_view.forEach(view => {
            view.classList.remove("active");
        });
    });
});