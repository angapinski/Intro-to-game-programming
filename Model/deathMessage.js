class DeathMessage extends GameObject {
    constructor(){
        super();
        this.transform.position.x = deathMessagePositionX;
        this.transform.position.y = deathMessagePositionY;
        this.transform.scale.x = deathMessageScaleX;
        this.transform.scale.y = deathMessageScaleY;
        this.messageText = "You Died";
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
