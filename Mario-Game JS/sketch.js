var bgImage, bg;
var mario, mario_running;
var jumpSound;
var brickImage, brickGroup;
var coinImage, coinGroup;
var coinScore = 0;
var mushObstacleImage, turtleObstacleImage, obstaclesGroup;




function preload() {
    bgImage = loadImage('images/bgnew.jpg');

    mario_running = loadAnimation(
        "images/mar1.png",
        "images/mar2.png",
        "images/mar3.png",
        "images/mar4.png",
        "images/mar5.png",
        "images/mar6.png",
        "images/mar7.png"
    );


    // load jump sound
    jumpSound = loadSound('sounds/jump.mp3');

    brickImage = loadImage('images/brick.png');


    // load jump sound



    coinSound = loadSound('sounds/coinSound.mp3')

    coinImage = loadAnimation(
        "images/con1.png",
        "images/con2.png",
        "images/con3.png",
        "images/con4.png",
        "images/con5.png",
        "images/con6.png"
    );




    mushObstacleImage = loadAnimation(
        "images/mush1.png",
        "images/mush2.png",
        "images/mush3.png",
        "images/mush4.png",
        "images/mush5.png",
        "images/mush6.png"
    );



    turtleObstacleImage = loadAnimation(
        "images/tur1.png",
        "images/tur2.png",
        "images/tur3.png",
        "images/tur4.png",
        "images/tur5.png",
    );


}

function setup() {
    createCanvas(1000, 700);
    bg = createSprite(600, 300);
    bg.addImage(bgImage);
    bg.scale = 0.5;


    mario = createSprite(200, 520, 20, 50);
    mario.addAnimation('running', mario_running);
    mario.scale = 0.2;


    ground = createSprite(200, 580, 400, 10);



    brickGroup = new Group();

    coinGroup = new Group();


    obstaclesGroup = new Group();
}

function draw() {
    drawSprites();
    // bg = bg.x-100;
    bg.velocityX = -5;

    if (bg.x < 100) {
        bg.x = bg.width / 4;
    }


    // code to make mario jump
    if (keyDown('space')) {
        mario.velocityY = -10;
        jumpSound.play();
    }

    // code to amke mario down
    mario.velocityY = mario.velocityY + 0.5;


    mario.collide(ground);
    ground.visible = false;


    generateBricks();

    for (let i = 0; i < brickGroup.length; i++) {
        var temp = brickGroup.get(i);

        if (temp.isTouching(mario)) {
            mario.collide(temp);
        }
    }


    // mario issue
    if (mario.x < 200) {
        mario.x = 200;
    }

    if (mario.y < 50) {
        mario.y = 50;
    }


    generateCoins();

    for (let i = 0; i < coinGroup.length; i++) {
        var temp = coinGroup.get(i);

        if (temp.isTouching(mario)) {
            coinScore++;
            coinSound.play();
            temp.destroy();
            temp = null;
        }
    }






    generateObstacles()

}


function generateBricks() {
    if (frameCount % 70 === 0) {
        var brick = createSprite(1200, 120, 40, 10);
        brick.y = random(100, 450);
        brick.addImage(brickImage);
        brick.scale = 0.5;
        brick.velocityX = -5;



        brick.lifetime = 250;

        brickGroup.add(brick);
    }
}



function generateCoins() {
    if (frameCount % 60 === 0) {
        var coin = createSprite(1200, 100, 40, 10);
        coin.y = random(80, 350);
        coin.addAnimation("coin", coinImage);
        coin.scale = 0.1;
        coin.velocityX = -5;



        coin.lifetime = 250;

        coinGroup.add(coin);
    }
}



function generateObstacles() {
    if (frameCount % 90 === 0) {
        var obstacle = createSprite(1200, 550, 40, 10);
        obstacle.scale = 0.1;
        obstacle.velocityX = -5;


        var rand = Math.round(random(1, 2));
        switch (rand) {
            case 1:
                obstacle.addAnimation("mush", mushObstacleImage);
                break;
            case 2:
                obstacle.addAnimation("turtle", turtleObstacleImage);
                break;
            default:
                break;
        }




        obstacle.lifetime = 250;
        obstaclesGroup.add(obstacle);
    }
}
