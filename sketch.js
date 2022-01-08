var knife
var knifeimg

var alienimg
var aliensgroup

var fruit1img
var fruit2img
var fruit3img
var fruit4img
var fruitsgroup

var gamestate="play"
var gameoverimg

function preload(){

knifeimg=loadImage("knife.png")
alienimg=loadAnimation("alien1.png","alien2.png")

fruit1img=loadImage("fruit1.png")
fruit2img=loadImage("fruit2.png")
fruit3img=loadImage("fruit3.png")
fruit4img=loadImage("fruit4.png")
gameoverimg=loadImage("gameover.png")

}











function setup(){

createCanvas(800,400)

knife=createSprite(50,370,60,40)
knife.addImage("knife",knifeimg)

aliensgroup=new Group()

fruitsgroup=new Group()

}














function draw (){
background("lightblue")

if (gamestate=="play"){
  knife.x=mouseX
  knife.y=mouseY
  spawnenemy()
spawnfruits()
if(fruitsgroup.isTouching(knife)){
fruitsgroup.destroyEach()



}
if (aliensgroup.isTouching(knife)){
gamestate="end"
}
}

if(gamestate=="end"){
aliensgroup.destroyEach()
fruitsgroup.destroyEach()
knife.addAnimation("gameOver",gameoverimg)
knife.changeAnimation("gameOver")
}











//calling the function

  drawSprites()
}

function spawnenemy(){

if (frameCount%60==0){
  var aliens=createSprite(800,random(0,400))
aliens.velocityX=-3
aliens.addAnimation("alien",alienimg)
aliensgroup.add(aliens)
}






}


function spawnfruits(){

  if (frameCount%80==0){
    var fruits=createSprite(800,random(0,400))
    fruits.velocityX=-4
    var numbers=Math.round(random(1,4))
    fruits.scale=0.2
  fruitsgroup.add(fruits)
  switch(numbers)
  {

case 1:fruits.addImage("fruits1",fruit1img)
 break;

 case 2:fruits.addImage("fruits2",fruit2img)
 break;

 case 3:fruits.addImage("fruits3",fruit3img)
 break;

 case 4:fruits.addImage("fruits4",fruit4img)
 break;

 default:
   break;



  }











  }
}

