class HighScoreMessage extends GameObject {
    constructor(){
        super();
        this.transform.position.x = highScorePositionX;
        this.transform.position.y = highScorePositionY;
        this.transform.scale.x = highScoreScalex;
        this.transform.scale.y = highScoreScaley;
        this.messageText = "Score";
        this.score = currentScore;
    }

    render = () => {
        ctx.fillStyle = 'white';
        ctx.textAlign = "center";
        ctx.font = "30px Comic Sans MS";
        ctx.fillText(this.messageText, 0, 0);

        ctx.fillStyle = 'white'
        ctx.textAlign = "center";
        ctx.font = "20px Comic Sans MS";
        ctx.fillText(this.score, 0, 30);
    }

    update = () => {
        
    }
}
