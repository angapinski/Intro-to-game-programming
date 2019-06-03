class Obstacle extends GameObject {
    constructor(gapDistance, startHeight, otherObstacle){
        super();
        this.height = obstacleHeight;
        this.thisWidth = obstacleWidth;
        this.gapDistance = gapDistance;
        this.isUpper = false;
        this.collidable = true;

        //Scales
        this.transform.scale.x = obstacleScale;
        this.transform.scale.y = obstacleScale;

        //Positions
        if(otherObstacle != null){
            this.transform.position.x = width / 2;
            this.transform.position.y = otherObstacle.transform.position.y - gapDistance - this.height*this.transform.scale.y;
            // console.log("Xpos lower: " + this.transform.position.x)
            // console.log("Xpos lower: " + this.transform.position.x * this.transform.scale.x)
            // console.log("Ypos lower: " + this.transform.position.y)
            // console.log("Ypos lower: " + this.transform.position.y * this.transform.scale.y)
        }
        else {
            this.transform.position.x = width / 2;
            this.transform.position.y = startHeight + gapDistance;
            this.isUpper = true;
        }
    }

    render = (ctx) => {
        //console.log(this.transform.position.y);
        ctx.fillStyle = "purple";
        ctx.fillRect(0, 0, this.thisWidth, this.height);
    }

    update = () =>{
        this.transform.position.x -= objectSpeed * Time.deltaTime;

        if(this.transform.position.x + (obstacleWidth * this.transform.scale.x) < -(width / 2)){
            console.log("Deleting obstacle");
            hierarchy.splice(hierarchy.indexOf(this), 1);
          }
    }
}
