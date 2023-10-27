let string="";
let buttons=document.querySelectorAll('.button');
buttons.forEach(btn =>{
  btn.addEventListener('click', e=>{
     console.log(e.target);
    if(e.target.innerHTML == '=' ){
      string=eval(string);
    document.querySelector('.input').value = string;
    }
      else if(e.target.innerHTML == 'C'){
        string="",
      document.querySelector('.input').value = string;
      }
        else if(e.target.innerHTML == '1/x'){
          string=1/string;
      document.querySelector('.input').value = string;
        }
          
        else if(e.target.innerHTML == "√"){
        string = Math.sqrt(string);
      document.querySelector('.input').value = string;
        }
            else if(e.target.innerHTML == '+/-'){
        string = -1*(string);
      document.querySelector('.input').value = string;
        }
           else if(e.target.innerHTML == 'X'){
              e.target.innerHTML = '*';
             string += e.target.innerHTML;
      document.querySelector('.input').value = string;
              e.target.innerHTML = 'X';    
        }
             
           else if(e.target.innerHTML == 'era'){
           string = string.toString().substring(0,string.toString().length-1);
      document.querySelector('.input').value = string;
        }
             
        else if(e.target.innerHTML == '()'){
        string = '(string)';
      document.querySelector('.input').value = string;
        }

             
    else {
    string = string + e.target.innerHTML;
    document.querySelector('.input').value = string;
    }
  })
})