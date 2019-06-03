class ScoreText extends GameObject {
    constructor(){
        super();
        this.transform.scale.x = 1;
        this.transform.scale.y = -1;
        this.transform.position.x = 0 - scoreTextBufferHorizontal;
        this.transform.position.y = height / 2 - scoreTextBufferVertical;
    }

    render = (ctx) => {
        //console.log("X: " + this.transform.position.x + " Y: " + this.transform.position.y)
        ctx.fillStyle = 'white';
        ctx.textAlign = "left";
        ctx.font = "30px Comic Sans MS";
        ctx.fillText(currentScore, 0, 0);
    }

    update = () => {

    }
}
