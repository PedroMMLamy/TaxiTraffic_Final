class Game {
  constructor() {
    this.canvas = undefined;
    this.ctx = undefined;
    this.car = new Player(this, 0,200, 175, 100);
    this.obstacles = [];
    this.gas = [];
    //
    this.score=0;
    this.backgroundImg = new Image();
    this.x = 0;
    this.y = 0;
    this.width = 800; 
    this.height = 700;
    this.intervalId = undefined;
    
  }

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.start();
    this.createObstacles();
    this.createGas();
    gameovermenu=document.getElementById("gameOver");
    centerMenuPosition(gameovermenu)

  }

  start() {
    this.drawBackground();
    this.drawMainCharacter();
    this.inetrvalId = setInterval(() => {
      this.clear();
      this.drawBackground();
      this.drawMainCharacter();
      this.car.move();
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].move();
        this.obstacles[i].draw();
        this.car.crashCollision(this.obstacles[i]);
  
        if (this.obstacles[i].y > 800) {
          this.obstacles.splice(i, 1);
        }
        //
        if(this.obstacles[i].x < -50){
          this.score +=10;
          this.obstacles.splice(i,1);
          console.log(this.score);
        }

      }
    }, 1000 / 60);
  }

  createObstacles() {
    if (Math.floor(Math.random() * 10) % 2 === 0) {
      this.obstacles.push(new Obstacle(this));
    }

    setTimeout(() => {
      this.createObstacles();
    }, 3000);
  }

  drawBackground() {
    this.backgroundImg.src = "images/road2.png";
    this.ctx.drawImage(
      this.backgroundImg,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  drawGameOverScreen(){
    this.ctx.clearRect(0,0,this.width,this.height);
    this.ctx.font = "30px Arial";
    this.ctx.fillText("Game Over", 100, 200); 
  }

 drawMainCharacter() {
    this.car.drawComponent("images/playercar.png");
  }

//  drawGasIcons() {
//    this.drawGasIcons ("gas", "images/gas.png", 22, 22);
//  }    
totalScore () {
this.font = '20px sans-serif'
this.fillStyle = '#ffffff'
this.fillText('Score:'+ this.score, 20, 80)
}


clear() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);

class State {
  constructor(start,player, status) {
    this.start = start;
    this.player = player;
    this.status = status;
  }

  static start(level) {
    return new State(level, start.startPlayer, "playing");
  }

  get player() {
    return this.player.find(a => a.type == "player");
  }
}
}
}
