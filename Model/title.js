class Title extends GameObject {
    constructor(){
        super();
        this.transform.position.x = 0;
        this.transform.position.y = 180;
        this.transform.scale.x = titleScaleX;
        this.transform.scale.y = titleScaleY;
        this.messageText = "Whirly Bird";
        this.score = currentScore;
    }

    render = () => {
        ctx.fillStyle = 'black';
        ctx.textAlign = "center";
        ctx.font = "30px Comic Sans MS";
        ctx.fillText(this.messageText, 0, 0);
    }

    update = () => {
        
    }
}
