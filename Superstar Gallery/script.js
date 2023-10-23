const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
}

function toggleActive(e){
    if(e.propertyName.includes('flex')){     //the proerty should contain either flex or flex-grow
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));   //we are listening to a click on each panel   //we do not use open() becuase we want it to find the function and run it
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));