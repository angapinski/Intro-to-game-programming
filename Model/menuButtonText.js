class MenuButtonText extends GameObject{
  constructor(x, y, message) {
    super();
    this.transform.position.x = x;
    this.transform.position.y = y;
    this.transform.scale.x = 1;
    this.transform.scale.y = -1;

    this.messageText = message;
  }
  render = () => {
    //ctx.strokeStyle = "black";
    ctx.fillStyle = 'black';
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = "30px Comic Sans MS";
    ctx.fillText(this.messageText, 0, 0);
  }

  update = () => {
  } 
}