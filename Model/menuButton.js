class MenuButton extends GameObject{
  constructor(x, y) {
    super();
    this.transform.position.x = x;
    this.transform.position.y = y;
    this.transform.scale.x = 1;
    this.transform.scale.y = 1;
    this.width = menuButtonWidth;
    this.height = menuButtonHeight;
  }

  render = () => {
    //ctx.strokeStyle = "black";
    ctx.lineWidth  = 1/this.transform.scale.x;
    ctx.strokeRect(0, 0, this.width, this.height);
  }

  update = () => {
  } 
}


