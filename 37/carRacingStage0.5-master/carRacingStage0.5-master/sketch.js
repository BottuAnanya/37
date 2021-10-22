var canvas, backgroundImage;
var allPlayers
var gameState = 0;
var playerCount=0;

var database;

var form, player, game;
var car1,car2,car3,car4,cars;

function setup(){
  canvas = createCanvas(displayWidth-30,displayHeight-145);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(225,225,225);
  if(playerCount===4){
   game.update(1);
  }
  if(gameState===1){
    game.play();
  }

}
