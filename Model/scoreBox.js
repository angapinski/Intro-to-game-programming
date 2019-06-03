class ScoreBox extends GameObject {
    constructor(){
        super();
        this.width = scoreBoxWidth;
        this.height = scoreBoxHeight;
        this.transform.scale.x = scoreBoxScaleX;
        this.transform.scale.y = scoreBoxScaleY;
        this.transform.position.x = -(this.width * this.transform.scale.x) / 2;
        this.transform.position.y = height / 2 - scoreBoxEdgeBuffer;
        
        this.collidable = false;

        this.currentFrameCount = 0;
        this.levelFrameCount = 0;
        this.totalFrameCount = 0;

    }

    render = (ctx) => {
        //console.log("HERE X: %d y: %d H: %d W: %d", this.transform.position.x, this.transform.position.y, this.height, this.width);
        ctx.fillStyle = "orange";
        ctx.fillRect(0, 0, this.width, this.height);

        ctx.fillStyle = 'black';
        ctx.textAlign = "center";
        ctx.font = "30px Comic Sans MS";
        //ctx.fillText(currentScore, 0, 0);
    }

    update = () => {
        if(this.currentFrameCount >= 60){
            currentScore = Math.floor(currentScore + currentScoreMultiplier);
            this.currentFrameCount = 0;
        }
        if(this.levelFrameCount >= frameRate * secondsBetweenScoreMultiplier){
            currentScoreMultiplier *= scoreLevelMutlitplier;
            objectSpeed *= obstacleSpeedMultiplier;
            baseTimeBetweenObstacles /= obstacleSpeedMultiplier;
            this.levelFrameCount = 0;
        }

        this.currentFrameCount++;
        this.levelFrameCount++;
        this.totalFrameCount++;
    }
}
