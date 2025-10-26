
// document.addEventListener('DOMContentLoaded',()=>{

    const taskinput=document.getElementById("addtask");
    const addbtn=document.getElementsByClassName('btn0')[0];
    const taskDisplay=document.getElementsByClassName("tasklist")[0];
    const container=document.querySelector(".taskdisplay");

    const addtask=(text,completed=false)=>{//completed is added whenever you add a new task it assumes it is incomplete
        const tasktext=text||taskinput.value.trim();//text can be from apis or local strorage
   
        if(!tasktext)
            alert("please enter task");
        else{
            const li=document.createElement('li');
            li.innerHTML=`<input type='checkbox' class="checkBox" ${completed ? 'checked' : ''}>
            <span>${tasktext}</span>
            <div class="taskButton">
            <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
            <button class="del-btn"> <i class="fa-solid fa-trash"></i></button>
            </div>`;

            taskDisplay.appendChild(li);

        li.querySelector('.del-btn').addEventListener('click',()=>{
                   li.remove();
            });

            const editbutton=li.querySelector('.edit-btn');
            const checkbox=li.querySelector('.checkBox');
            
            if(completed){
                li.classList.add('completed');
                editbutton.disabled=true;
                editbutton.style.opacity='0.5';
                editbutton.style.pointerEvents='none';
            }
            checkbox.addEventListener('change',()=>{
                const isChecked=checkbox.checked;
             li.classList.toggle('completed',isChecked);
             editbutton.disabled=isChecked;
             editbutton.style.opacity=isChecked? '0.5':1;
               editbutton.style.pointerEvents=isChecked? 'none': 'auto';
            });

            editbutton.addEventListener('click',()=>{
                if(!checkbox.checked){
                    taskinput.value=li.querySelector('span').innerText;//textcontext
                    li.remove();
                }
            });

            taskinput.value="";
        }

    }
  
   addbtn.addEventListener('click',addtask);//to add task 

   taskinput.addEventListener('keypress',(event)=>{
    if(event.key=='Enter'){
        event.preventDefault();
        addtask();
       }
   })


   
     
  

