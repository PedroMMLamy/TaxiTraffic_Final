class Player extends Component {
  constructor(game, x, y, w, h, accelerate) {
    super(game, x, y, w, h, accelerate);
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;
    this.accelerate = 4;
  }
  crashCollision(element){
    //y axis
    if (this.y + 10 <= element.y + element.height && this.y >= element.y) {
      //x axis
      if (this.x+this.width + 10 >= element.x && this.x <= element.x + element.width) {
        localStorage.setItem("score",this.game.score)
        window.open("gameOver.html","_self")
       
      }
    }
  }
  move(){
  document.onkeydown = event => {
    const key = event.keyCode;
    const possibleKeystrokes = [37, 65, 38, 87, 39, 83, 40, 68];
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();
      switch (key) {
        case 37:
        case 65:
          if (this.x >= 10) this.x -= 20;
          break;
        case 38:
        case 87:
          if (this.y >= 10) this.y -= 20;
          break;
        case 39:
        case 83:
          if (this.x <= 490 - this.width) this.x += 20;
          break;
        case 40:
        case 68:
          if (this.y <= 690 - this.height) this.y += 20;
          break;
      }
    }
  };
}
}
  //pickGas(element){ }
/*
  move(){
    
    if (this.left) {
       this.x -= this.accelerate;
    }
    if (this.right) {
     if(this.x<=600 -this.width) this.x += this.accelerate;
    }
    if (this.up) {
      if(this.y>=20) this.y -= this.accelerate; 
    }
    if (this.down) {
      if(this.y<=380 - this.height) this.y -= this.accelerate;
    }    
    
      document.onkeydown = (event) => {
        event.preventDefault()
          
       const key = event.keyCode;
       console.log(event)

       const possibleKeysStrokes = [32,37,38,39,40,87,65,68,83];
       
       if(possibleKeysStrokes.includes(key)){

         switch(key){
          case 37:
          case 65:
            this.left = false;
            break;  
          case 39:
          case 68: 
            this.right = false;
              break;
          case 38:
          case 87:  
            this.up = false;
            break;
          case 40:
          case 83:  
            this.down = false;
            break;
            case 32:
            if(this.y <=400 - this.height && this.x <=600) this.x +=120
            break;
        }
    }
      }
  }
}
  */
/*
document.onkeyup = (event) => {
  event.preventDefault()
    
 const key = event.keyCode;

 const possibleKeysStrokes = [32,37,38,39,40,87,65,68,83];
 
 if(possibleKeysStrokes.includes(key)){

   switch(key){
    case 37:
    case 65:
      this.left = false;
      break;  
    case 39:
    case 68: 
      this.right = false;
        break;
    case 38:
    case 87:  
      this.up = false;
      break;
    case 40:
    case 83:  
      this.down = false;
      break;
      case 32:
      if(this.y <=400 - this.height && this.x <=600) this.x +=120
      break;
  }
}
};
  
  
  
*/

/*class Gas {
  constructor(pos, basePos, wobble) {
    this.pos = pos;
    this.basePos = basePos;
    this.wobble = wobble;
  }

   type() { return "gas"; }

   create(pos) {
    let basePos = pos.plus(new Vec(0.2, 0.1));
    return new gas(basePos, basePos,
                    Math.random() * Math.PI * 2);
  }
}

Gas.prototype.size = new Vec(0.6, 0.6);

*/
