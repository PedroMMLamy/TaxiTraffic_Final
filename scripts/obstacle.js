class Obstacle extends Component {
  constructor(game) {
    super(game);
    this.x = 500;
    this.y = Math.floor(Math.random() * 440 + 30);
    this.width = 175;
    this.height = 100;
    this.img = new Image();
  }
  draw() {
    this.img.src = "images/taxiCar.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move() {
  
      this.x -= 5;
    
  }
}
