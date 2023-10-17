// Developed By Engineer Elhamuddin Taheri
// getting elements with dom:
let cHour = document.querySelector('#cHour')
let cMin = document.querySelector('#cMin')
let cSec = document.querySelector('#cSec')
let tHour = document.querySelector('#tHour')
let tMin = document.querySelector('#tMin')
let button = document.querySelector('#button')
let button2 = document.querySelector("#button2")
var clk = new Date()

// clock function:
function clock(){
    clk = new Date()
    cHour.textContent = Number(clk.getHours())
    cMin.textContent = Number(clk.getMinutes())
    cSec.textContent = Number(clk.getSeconds())   
}

// set interval
setInterval(clock,500)

// adding event to the button:
button.addEventListener("click",e => {
    let clock_seconds = Number(cHour.textContent)* 3600 + Number(cMin.textContent)* 60 + Number(cSec.textContent)
    let timer_seconds = Number(tHour.value) * 3600 + Number(tMin.value)*60
    console.log(timer_seconds - clock_seconds)
    let _time = timer_seconds - clock_seconds

    // adding audio to the alarm
    function sound(){
        let _sound = new Audio("ringtone.mp3")
        _sound.play()
        button2.setAttribute("style","display:block;")
        button2.addEventListener("click",e => {
            _sound.pause()
            button2.setAttribute("style","display:none;")
        })

        function hide_btn (){
            button2.setAttribute("style","display:none;")
        }
        setTimeout(hide_btn,16800)
    }
    

    // adding time interval:
    setTimeout(sound,_time * 1000)
})

