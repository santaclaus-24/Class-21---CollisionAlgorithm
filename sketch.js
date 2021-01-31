var rec1, rec2;
var rec3, rec4;
var rec5, rec6;

function setup() {

  createCanvas(1500,900);

  rec1 = createSprite(750,100,50, 50);
  rec1.shapeColor = "red"

  rec2 = createSprite(750,200,50,50);
  rec2.shapeColor = "red";

  rec3 = createSprite(750,300,50,50);
  rec3.shapeColor = "red";

  rec4 = createSprite(750,400,50,50);
  rec4.shapeColor = "red";

  rec5 = createSprite(750,500,50,50);
  rec5.shapeColor = "red";

  rec6 = createSprite(750,600,50,50);
  rec6.shapeColor = "red";
}

function draw() {

  background(0);
  
  rec6.x = World.mouseX;
  rec6.y = World.mouseY;

  if (collision(rec3,rec6)){

    rec3.shapeColor = "orange";
    rec6.shapeColor = "orange";
  }
else{

  rec3.shapeColor = "red";
  rec6.shapeColor = "red";
}

  drawSprites();
}

function collision(ob1,ob2){

  if(ob2.x - ob1.x < ob1.width/2 + ob2.width/2 && 
    ob1.x - ob2.x < ob1.width/2 + ob2.width/2 && 
    ob2.y - ob1.y < ob1.height/2 + ob2.height/2 && 
    ob1.y - ob2.y < ob1.height/2 + ob2.height/2){
       
        return true;
  }
else{
        return false;
 }
}