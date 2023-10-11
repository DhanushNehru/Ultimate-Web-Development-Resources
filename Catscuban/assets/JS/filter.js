const filterbtn = document.querySelector("#filter-btns").children;
const items = document.querySelector(".container-p").children;

for(let i=0; i< filterbtn.length; ++i)
{
    filterbtn[i].addEventListener("click", function()
    {
        for(let j=0; j <filterbtn.length; j++)
        {
            filterbtn[j].classList.remove("active");
        }

        this.classList.add("active");
        const target = this.getAttribute("data-target");
       
        for(let k=0; k<items.length; ++k)
        {
            items[k].style.display = "none";

            if (target == items[k].getAttribute("data-id"))
            {
                items[k].style.display = "block";
            }

            if(target == "all")
            {
                items[k].style.display = "block";
            }
        }




    })
}