//Create variables here
var dog;
var happydog;
var dogImg;
var happydogImg;
var foodStock;
var database;
var Stock;
var foodS;


function preload()
{
  //load images here
  dogImg = loadImage("dogImg.png");
  console.log(database);
  happydogImg = loadImage("dogImg1.png")

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  
  dog = createSprite(250,400,20,20);
  dog.addImage(dogImg)
  dog.scale = 0.2;
  
  
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
  
}


function draw() {  
  background(255,144,85)
  textSize(35);
  fill("white");
  text("Food Remaining:"+foodS,100,150)
  
 if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happydogImg)
 }
  
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
database.ref('/').update({
Food:x
})
}

