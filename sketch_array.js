const { Engine, World, Bodies, Body } = Matter ;
var rdrop
var rain = ["A","B","C","D","E","F","G","H","I","J","K","L","M"];
var i = 0;

function setup() {
      engine = Engine.create();
      world = engine.world;
      var canvas = createCanvas(800,400);
  
    }  


function newDrop() {
  var rdrop = new Drop(random(20,600),random(5,400),random(2,15));
  return rdrop;

}

function draw() {
  newDrop();
  i = int(random(1,13));
  background("yellow");
  rain.push("P");
  console.log("i = " + i);
  console.log(rain.length);
  console.log(rain[i]);
  }

     
  
