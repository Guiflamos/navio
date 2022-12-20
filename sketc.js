var navio,ceu



function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(700,700);
  ceu=createSprite(200,200)
ceu.addImage(seaImg)
ceu.scale=0.7
ceu.velocityX=-5
navio=createSprite(200,400.30,30)
navio.addAnimation("shipImg1",shipImg1);
navio.scale=0.5

}
function draw() {
  //background("blue");
    drawSprites();
 if (ceu.x < 0){
  ceu.x = ceu.width/2;
 }
 
}
