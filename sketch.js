var ground, music;
var ball,edges;
var block1,block2,block3,block4;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    ground = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(100,570,200,20);
    block1.shapeColor = "#3333ff";
    block2 = createSprite(300,570,200,20);
    block2.shapeColor = "#006633";
    block3 = createSprite(500,570,200,20);
    block3.shapeColor = "#ffff33";
    block4 = createSprite(700,570,200,20);
    block4.shapeColor = "#ff0099";

    //create box sprite and give velocity
    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = "white";

    ball.velocityX = 5;
    ball.velocityY = 7;
    
   
}

function draw() {
    background("grey");
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "#3333ff";
        music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "#006633";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "#ffff33";
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "#ff0099";
    }

    drawSprites();
}
