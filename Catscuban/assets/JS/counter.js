
const counters = document.querySelectorAll(".counter");


counters.forEach(function(counter)
{

counter.innerText = "0";


const update = ()  =>
{
const target = +counter.getAttribute("data-target");
const c = +counter.innerText;

const inc = target/300;

if(c < target)
{
    counter.innerText = Math.ceil(c+inc);
    setTimeout(update, 65);
}

else{
    counter.innerText = target;
}

};

update();

});


