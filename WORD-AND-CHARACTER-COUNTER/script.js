let div__textarea = document.getElementById('div__textarea');
            let word = document.getElementById("span1");
            let letter = document.getElementById("span2");
            div__textarea.addEventListener('input' ,function(){
                let smurf = div__textarea.value;
                letter.innerHTML = smurf.length
                div__textarea.value.split(" ");
                smurf = smurf.trim()
                word.innerHTML = smurf.split(" ").filter(function(elm){
                    return elm != "";
                }).length
            })