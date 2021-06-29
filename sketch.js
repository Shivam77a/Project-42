var bgImg,issImg,sp1Img,sp2Img,sp3Img,sp4Img;
var iss,spacecraft;
var hasdocked=false;

function preload(){
bgImg=loadImage("spacebg.jpg")
issImg=loadImage("iss.png")
sp1Img=loadImage("spacecraft1.png")
sp2Img=loadImage("spacecraft2.png")
sp3Img=loadImage("spacecraft3.png")
sp4Img=loadImage("spacecraft4.png")
}


function setup() {
  createCanvas(800,400);
  iss=createSprite(330,130)
  iss.addImage(issImg)
  iss.scale=0.25

  
  spacecraft=createSprite(285,240)
  spacecraft.addImage(sp1Img)
  spacecraft.scale=0.15

}

function draw() {
  background(bgImg);  
  if(!hasdocked){
     spacecraft.x=spacecraft.x+random(-1,1);
     if(keyDown(UP_ARROW)){
        spacecraft.y=spacecraft.y-2
     
      } 
      if(keyDown(DOWN_ARROW)){
        spacecraft.addImage(sp2Img)
     } 
     if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(sp4Img)
      spacecraft.x=spacecraft.x-1 
   
    } 
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(sp3Img)
      spacecraft.x=spacecraft.x+1 
   
    } 
    }
    if(spacecraft.y <= (iss.y+70)&& spacecraft.x<= (iss.x-10)){
      hasdocked = true;
       textSize(25);
        fill("white") 
        text("Docking Successful!", 200, 300); }
  drawSprites();
}