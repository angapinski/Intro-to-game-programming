class ContinueMessage extends GameObject {
    constructor(instruction){
        super();
        this.transform.position.x = 0;
        this.transform.position.y = - width / 2 + edgeBuffer;
        this.transform.scale.x = continueMessageScaleX;
        this.transform.scale.y = continueMessageScaleY;
        this.messageText = "Click to " + instruction;
        this.score = currentScore;
    }

    render = () => {
        ctx.fillStyle = continueMessageColor;
        ctx.textAlign = "center";
        ctx.font = "30px Comic Sans MS";
        ctx.fillText(this.messageText, 0, 0);
    }

    update = () => {
        
    }
}
