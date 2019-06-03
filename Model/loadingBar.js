class LoadingBar extends GameObject {
    constructor(){
        super();
        this.width = loadBarWidth;
        this.height = loadBarHeight;
        this.transform.scale.x = loadBarScaleX;
        this.transform.scale.y = loadBarScaleY;
        this.transform.position.x = - this.width / 2 - 25;
        this.transform.position.y = -150;
        
        this.collidable = false;
        this.currentFrameCount = 0;

        this.currentWidth = this.width / 20;

        this.tempRightX = this.transform.position.x + this.width;
        console.log("startX: " + this.transform.position.x + "  ENDX: " + this.tempRightX);
    }

    render = () => {
        ctx.lineWidth  = 1/this.transform.scale.x;
        ctx.strokeRect(0, 0, this.width, this.height);

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.currentWidth, this.height);
    }

    update = () => {
        this.currentFrameCount++;
        if(this.currentFrameCount % (frameRate * loadScreenWaitTime / 20) == 0){
            this.currentWidth += this.width / 20;
        }
    }
}
