var charizard,charizard1Img,charizard2Img,charizard3Img;
var charizard4Img,charizardImg;
var blastoise,blastoiseImg,blastoise1Img,blastoise2Img,blastoise3Img,blastoise4Img;
var bgImg;
var script,scriptImg,battleImg;
var gameState = 0;
var playerCount;
var player;
var form;
var game;
var blast;
var life = 3;
var heart1,heart2,heart3,heart4,heart5,heart6,heart7,heart8;
var heartfull1,heartfull2,heartfull3,heartfull4,heartfull5,heartfull6,heartfull7,heartfull8,heartfullImg;
var hearthalf1,hearthalf2,hearthalf3,hearthalf4,hearthalf5,hearthalf6,hearthalf7,hearthalf8,hearthalfImg;
var heartlast1,heartlast2,heartlast3,heartlast4,heartlast5,heartlast6,heartlast7,heartlast8,heartlastImg;
var heartdead1,heartdead2,heartdead3,heartdead4,heartdead5,heartdead6,heartdead7,heartdead8,heartdeadImg;
var projectile1,projectile1Img,projectile2,projectile2Img;
var player11,player22,player11Img,player22Img;
function preload(){
charizardImg = loadAnimation("charizard1.png","charizard2.png")
charizard1Img = loadAnimation("charizard1.png","charizard2.png")
charizard2Img = loadAnimation("charizard3.png","charizard4.png")
charizard3Img = loadAnimation("charizard5.png","charizard6.png")
charizard4Img = loadAnimation("charizaed7.png","charizard8.png")
blastoiseImg = loadAnimation("blast.png","blast1.png")
blastoise1Img = loadAnimation("blast.png","blast1.png")
blastoise2Img = loadAnimation("blast2.png","blast3.png")
blastoise3Img = loadAnimation("blast4.png","blast5.png")
blastoise4Img = loadAnimation("blast6.png","blast7.png")
heartfullImg = loadImage("heartfull.png");
hearthalfImg = loadImage("hearthalf.png");
heartlastImg = loadImage("heartlast.png");
projectile1Img = loadImage("Fprojectile.png")
projectile2Img = loadAnimation("surf1.png","surf2.png","surf3.png","surf4.png","surf5.png","surf6.png","surf7.png","surf8.png")
player11Img = loadImage("red.png")
player22Img = loadImage("blue.png")
bgImg = loadImage("loadingscreen.png")
scriptImg = loadImage("pokemon.png");
battleImg = loadImage("battlebackground.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
   database = firebase.database();
  //  game = new Game();
  //  game.getState();
  //  game.start();
  game = new Game();
  game.start();
  projectile11 = new Group();
  projectile22 = new Group();
  charizard = createSprite(200,100)
    charizard.addAnimation("charizard",charizardImg)
    charizard.addAnimation("left",charizard2Img)
    charizard.addAnimation("right",charizard3Img)
    charizard.addAnimation("up",charizard4Img)
    charizard.addAnimation("down",charizard1Img)
    blast = createSprite(displayWidth-200, displayHeight-200)
    blast.addAnimation("charizard",charizardImg)
    blast.addAnimation("left",charizard2Img)
    blast.addAnimation("right",charizard3Img)
    blast.addAnimation("up",charizard4Img)
    blast.addAnimation("down",charizard1Img)
}

function draw() {
  //background(255,255,255); 
  
  if (gameState === 1&& playerCount === 2){
    form.hide();
    background(battleImg)
    drawSprites();
    
    if(keyDown("RIGHT_ARROW")){
      charizard.changeAnimation("right",charizard3Img)
      charizard.x = charizard.x + 10
      
    }
    if(keyDown("LEFT_ARROW")){
      charizard.changeAnimation("left",charizard2Img)
      charizard.x = charizard.x - 10
    }
    if(keyDown ("UP_ARROW")){
      charizard.changeAnimation("up",charizard4Img)
      charizard.y = charizard.y - 10
      
    }
    if(keyDown ("DOWN_ARROW")){
      charizard.changeAnimation("down",charizard1Img)
      charizard.y = charizard.y + 10
      
    }
    
    
    
    if(keyDown("d")){
      blast.changeAnimation("right",charizard3Img)
      blast.x = blast.x + 10
      
    }
    if(keyDown("a")){
      blast.changeAnimation("left",charizard2Img)
      blast.x = blast.x - 10
      
      
      
    }
    if(keyDown ("w")){
      blast.changeAnimation("up",charizard4Img)
      blast.y = blast.y - 10
      
    }
    if(keyDown ("s")){
      blast.changeAnimation("down",charizard1Img)
      blast.y = blast.y + 10
      
    }
    // if(life === 3){
    //   heart1.visible = true
    //   heart2.visible = true
    //   heart3.visible = true
    // }
    // if(life === 2){
    //   heart1.visible = false
    //   heart2.visible = true
    //   heart3.visible = true
    // }
    // if(life === 1){
    //   heart1.visible = false
    //   heart2.visible = false
    //   heart3.visible = true
    // }
    // if(life === 0){
    //   heart1.visible = false
    //   heart2.visible = false
    //   heart3.visible = false
    // }
    //
  }
  //drawSprites();
  }


 

