var nos = document.querySelectorAll(".piano").length;

for (var i=0 ; i<nos ; i++) {
    document.querySelectorAll(".piano")[i].addEventListener("click", function(){
        var buttonText = this.innerHTML;
        // console.log(buttonText);
        play(buttonText);
    });
};

document.addEventListener("keypress", (event) => {
    var key = event.key;
    console.log(key);
    play(key);
})


function play(button){
    switch (button){
        case "b":
            var s1 = new Audio('Sound/c3-95007.mp3');
            s1.play();
            break;

        case "as":
            var s1 = new Audio('Sound/c6-102822.mp3');
            s1.play();
            break;

        case "a":
            var s1 = new Audio('Sound/c6-82019.mp3');
            s1.play();
            break;

        case "gs":
            var s1 = new Audio('Sound/do-80236.mp3');
            s1.play();
            break;
    
        case "g":
            var s1 = new Audio('Sound/e6-82016.mp3');
            s1.play();
            break;
    
        case "fs":
            var s1 = new Audio('Sound/fa-78409.mp3');
            s1.play();
            break;

        case "f":
            var s1 = new Audio('Sound/g6-82013.mp3');
            s1.play();
           break;
    
        case "e":
             var s1 = new Audio('Sound/g6-82014.mp3');
            s1.play();
            break;
    
        case "ds":
            var s1 = new Audio('Sound/la-80237.mp3');
            s1.play();
           break;
    
        case "d":
           var s1 = new Audio('Sound/mi-80239.mp3');
            s1.play();
           break;
        
        case "cs":
           var s1 = new Audio('Sound/piano-normal-d4wav-14838.mp3');
            s1.play();
           break;
        
        case "c":
            var s1 = new Audio('Sound/si-80238.mp3');
            s1.play();
            break;

        default :
            console.log(buttonText);
    }
}