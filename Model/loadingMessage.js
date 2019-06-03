class LoadingMessage extends GameObject {
    constructor(){
        super();
        this.transform.position.x = loadMessagePositionX;
        this.transform.position.y = loadMessagePositionY;
        this.transform.scale.x = 1;
        this.transform.scale.y = -1;
        this.messageText = "Loading";
    }

    render = () => {
        ctx.fillStyle = 'black';
        ctx.textAlign = "center";
        ctx.font = "40px Comic Sans MS";
        ctx.fillText(this.messageText, 0, 0);
    }

    update = () => {
        
    }
}