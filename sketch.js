var player
var ball
var girlFront , girlUp , girlRight , girlRight , girl

function preload(){
girlFront = loadAnimation("girlfront1.png" , "girlfront2.png" , "girlfront3.png" , "girlfront4.png")

girlLeft = loadAnimation("girlleft1.png" , "girlleft2.png" , "girlleft3.png" , "girlleft4.png")

girlRight = loadAnimation("girlright1.png" , "girlright2.png" , "girlright3.png" , "girlright4.png")

girlUp = loadAnimation("girlup1.png" , "girlup2.png" , "girlup3.png" , "girlup4.png")

girl = loadAnimation("girlfront1.png")


}














function setup(){
createCanvas(600,600)

player = createSprite(300,300.20,60)
player.addAnimation("standing" , girl)
player.addAnimation("front" , girlFront)
player.addAnimation("up" , girlUp)
player.addAnimation("left" , girlLeft)
player.addAnimation("right" , girlRight)

player.scale = 3




}
function draw(){
background(0)



spawnLeft()
spawnRight()

drawSprites()
}


function keyPressed(){
if(keyCode === UP_ARROW){
  player.y = player.y-6
  player.changeAnimation("up")
}

if(keyCode === DOWN_ARROW){
   player.y = player.y+6
   player.changeAnimation("front")

}

if(keyCode === LEFT_ARROW){
    player.x = player.x-6
    player.changeAnimation("left")

}

if(keyCode === RIGHT_ARROW){
  player.x = player.x+6
  player.changeAnimation("right")
}


}

function spawnLeft(){
  if(frameCount%60===0){
    ball1 = createSprite(0,random(20,380),20,20)
    ball1.velocityX = 4
    ball1.velocityY = ball1.velocityY+1
  }



}

function spawnRight(){
if(frameCount%60===0){
ball2 = createSprite(600, random(0,400) , 20, 20)
ball2.velocityX = -4
ball2.velocityY = ball2.velocityY+1
}





}







