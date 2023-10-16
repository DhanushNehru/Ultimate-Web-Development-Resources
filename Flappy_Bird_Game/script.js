const cvs = document.getElementById("board");
const ctx = cvs.getContext("2d");
let frames = 0;

const All_In_One_image = new Image();
All_In_One_image.src = "All_In_One_image.png";

const state = {
    current : 0,
    getReady : 0,
    game : 1 ,
    over : 2

}
const startBtn = {
    x : 120,
    y : 263,
    w : 83,
    h : 29
}
//Background Image

const bgImg = {
    sX : 0 ,
    sY : 0 , 
    w : 275 , 
    h : 226 ,
    x : 0 ,
    y : cvs.height - 226 ,

    draw : function() {
        for( i = 0 ; i<=5 ; i++){
            ctx.drawImage(All_In_One_image,this.sX ,this.sY ,this.w ,this.h ,this.x + i*this.w ,this.y ,this.w , this.h);
        }
    }
}
//Foreground Image

const fgImg = {
    sX : 276,
    sY : 0,
    w : 224,
    h : 112,
    x : 0,
    y : cvs.height - 112,
    dx : 1,
    
    draw : function () {
        for( i = 0 ; i<=9 ; i++) {
            ctx.drawImage(All_In_One_image,this.sX ,this.sY ,this.w ,this.h ,this.x + i*this.w ,this.y ,this.w , this.h);
        }
    },

    update : function() {
        if(state.current == state.game) {
            this.x = (this.x - this.dx) ;         
            if(this.x % 112 == 0) {
                this.x = 0;
            }
        }
    }
}

//Flappy Bird Code

const bird = {
    animation : [
        {sX : 276, sY : 112},
        {sX : 276, sY : 139},
        {sX : 276, sY : 164},
        {sX : 276, sY : 139},
    ],
    x : 100,
    y : 200,
    w : 34,
    h : 26,
    frame : 0,
    radius : 12,
    gravity : 0.15,
    jump : 4,
    speed : 0,
    period : 5,
  
    draw : function () {
        let bird = this.animation[this.frame];
        ctx.drawImage(All_In_One_image, bird.sX, bird.sY, this.w, this.h, this.x, this.y, this.w-4, this.h-4); 
    },

    flap : function() {
        this.speed = - this.jump;
    },
    
    update : function() {
        this.period = state.current == state.getReady ? 10 : 5;
        this.frame += frames % this.period == 0 ? 1 : 0;
        this.frame = this.frame % this.animation.length;

        if(state.current == state.getReady) {
            this.y = 150;
        }
        else{
            this.speed += this.gravity;
            this.y += this.speed;
        
           //game over
            if(this.y + this.h/2 >= cvs.height -fgImg.h) {
                this.y = cvs.height -fgImg.h - this.h/2;
                if(state.current == state.game) {
                    state.current = state.over;
                }
            } 
        }
    },

speedReset : function() {
    this.speed = 0;
  }
}

cvs.addEventListener("click", function() {
    switch(state.current) {

        case state.getReady:
            state.current = state.game;
            break;
        case state.game:
            bird.flap();
            break;
        case state.over:
            state.current = state.getReady;
            pipes.reset();
            bird.speedReset();     
            score.reset();
            break;       
    }
});

const getReady = {
    sX : 0,
    sY : 228,
    w : 173,
    h : 152,
    x : cvs.width/2 - 173/2,
    y : 80,

    draw: function() {
        if(state.current == state.getReady) {
        ctx.drawImage(All_In_One_image, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }
    }
}
const gameOver = {
    sX : 175,
    sY : 228,
    w : 225,
    h : 202,
    x : cvs.width/2 - 225/2,
    y : 90,
  
    draw: function() {
      if(state.current == state.over){
      ctx.drawImage(All_In_One_image, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
      }
    } 
}

 //Pipes Code

  const pipes = {
    position :[],
    top : {
        sX : 553,
        sY : 0,
    },
    bottom: {
        sX : 502,
        sY : 0
    },

    w : 53,
    h : 400,
    gap : 165,
    maxYPos : -150,
    dx : 2,

    draw : function() {
        for(let i =0; i < this.position.length; i++) {
            let p = this.position[i];

            let topYPos = p.y;
            let bottomYPos = p.y + this.h + this.gap;

            //Top Pipes
            ctx.drawImage(All_In_One_image, this.top.sX, this.top.sY, this.w, this.h, p.x, topYPos, this.w, this.h);

             //Bottom Pipes
             ctx.drawImage(All_In_One_image, this.bottom.sX, this.bottom.sY, this.w, this.h, p.x, bottomYPos, this.w, this.h);
        }

    },

  update : function() {
     if (state.current !== state.game)
      return;

     if (frames%130 == 0) {
        this.position.push( {
            x : cvs.width,
            y : this.maxYPos * (Math.random() + 1)
        });
    }
        for(let i = 0; i < this.position.length; i++) {
            let p = this.position[i];
            let bottomPipeYPOS = p.y + this.h + this.gap;

            //Collision Conditions

            //Top pipe 
            if(bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.w && bird.y + bird.radius > p.y && bird.y - bird.radius < p.y + this.h ) {
                state.current = state.over;
            }
            //Bottom Pipe
            if(bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.w && bird.y + bird.radius > bottomPipeYPOS && bird.y - bird.radius < bottomPipeYPOS + this.h ) {
                state.current = state.over;
            }

            // Move pipes to the left
            p.x -= this.dx;
           
            if(p.x + this.w <= 0) {
                this.position.shift();
                score.value += 1;
                score.best = Math.max(score.value, score.best);
                localStorage.setItem("best", score.best);
            }
        }
    },
      reset : function() {
        this.position = [];
      }
  }

  //Score Board

  const score = {
    best : parseInt(localStorage.getItem("best")) ||0,
    value :0,

    draw : function() {
        ctx.fillStyle = "#FFF";
        ctx.strokeStyle = "#000";

        if(state.current == state.game){
            ctx.lineWidth =  1.9;
            ctx.font = "40px Teko";
            ctx.fillText(this.value, cvs.width/2, 50);
            ctx.strokeText(this.value, cvs.width/2, 50);

        }else if(state.current == state.over){
           //score value
           ctx.font = "28px Teko";
           ctx.fillText(this.value, 820, 186);
           ctx.strokeText(this.value, 820, 186);
           
           //best score
           ctx.fillText(this.best, 820, 228);
           ctx.strokeText(this.best, 820, 228);
        }  
    },
    reset : function() {
        this.value = 0;
    }
}
     //Calling All draw Functions 

  function draw() {
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, cvs.width, cvs.height);

    bgImg.draw();
    pipes.draw();
   fgImg.draw();
    bird.draw();
    getReady.draw();
    gameOver.draw();
    score.draw();
}

   //Calling All Update Functions
function update() {
     bird.update();
    fgImg.update();
     pipes.update();
}
    //Looping 

function loop() {
    update();
    draw();
    frames++;
    requestAnimationFrame(loop);
}
loop();