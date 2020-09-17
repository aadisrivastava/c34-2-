//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock;
var feedButton,addFood;
var foodObj;
var fedTime,lastFed;

function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  dogImage2=loadImage("images/dogImg1.png");
  milkImage=loadImage("images/Milk.png");
}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(700,300,20,20);
  dog.addImage(dogImage);
  dog.scale=0.2;
  foodObj=new Food();

  database=firebase.database();
  
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  stroke("yellow");
  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
   lastFed=data.val();
   });
  feedButton =  createButton("Feed The Dog");
  feedButton.position(700,95);
  feedButton.mousePressed(feedDog);
  
  addFood=createButton("Add FOOD");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}


function draw() {  
  background(46,139,87);
 
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("LAST FED :" + lastFed%12+"P.M",350,30)
  }else if(lastFed===0){
     text("LAST FED:12 A.M",350,30);
  }else{
    text("LAST FED"+lastFed%+"A.M",350,30);
  }
    foodObj.display();



   
  drawSprites();
  
  text("FOOD REMAINING:",180,120);
  
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
database.ref('/').update({
  food:x
})
}
 function readStock(data){
  foodS=data.val();

 }
function feedDog(){
dog.addImage(dogImage2);
foodObj.updateFoodStock(foodObj.getFoodStock()-1);
database.ref('/').update({
  food:foodObj.getFoodStock(),
  fedTime:hour()
})


}
function mousePressed(){
if(mousePressed(feedButton)){
foodObj.velocityX=2;

}
  
}
function addFoods(){
  foodS++;
  database.ref('/').update({
    food:foodS
  })


}
