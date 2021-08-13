var newX =300;

function preload(){
  bg1=loadImage("images/bg5.png")
  p_walking1= loadAnimation("images/shooter_player (3).png","images/shooter_player (4).png","images/shooter_player (5).png"
  ,"images/shooter_player (6).png","images/shooter_player (7).png")
  e_walking1= loadAnimation("images/enemy8.png","images/enemy9.png")
  platformImg= loadImage("images/platform2.png")
  shootImg= loadImage("images/shooter_player_shoot (1).png")
  groundImg= loadImage("images/ground.png")
  playerImg= loadImage("images/shooter_player (1).png")
  winImg= loadImage("images/medal1.png")
}
function setup(){
  var canvas=createCanvas(1700,displayHeight);

  win= new Win()
  platformGroup= new Group()
  player= new Player()
  ground= new Ground()
  for(var i=0; i<100; i++){
    platform= new Platform(newX)
    newX= newX+platform.width
    platformGroup.add(platform.body)
    enemy= new Enemy(newX)
  }
}
function draw()
{
  background(bg1);
 // translate(-player.body.x+150,0)
 camera.position.x=player.body.x+500
 camera.position.y=height/2
  if(keyDown("right")){
    player.moveRight()
  }
  if(keyDown("left")){
    player.moveLeft()
  }
  if(keyDown("up") && player.body.velocityY===0){
    player.moveUp()
  }
  player.gravity()
  enemy.gravity()
  if(player.body.collide(enemy.body)){
    player.destroy()
  }

  player.body.collide(platformGroup)
  player.body.collide(enemy.body)
  player.body.collide(ground.body)
  player.body.collide(win.body)

  drawSprites()
  
}
