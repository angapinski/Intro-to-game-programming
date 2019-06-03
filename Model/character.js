class Character extends GameObject {
    aliveImg = new Image();
    deathImg = new Image();
    currentImg = new Image();

    constructor(x, y){
        super();
        this.aliveImg.src = "Images/heli.png";
        this.deathImg.src = "Images/explosion.png"
        this.currentImg = this.aliveImg;
        this.dead = false;
        this.transform.position.x = x;
        this.transform.position.y = y;
        this.transform.scale.x = aliveImageScale;
        this.transform.scale.y = aliveImageScale;
        this.width = Math.abs(this.transform.scale.x * characterPixelSize);
        this.height = Math.abs(this.transform.scale.y * characterPixelSize);
        this.collidable = true;
        this.gravityEnabled = false;

        this.baseSpeedVerticalUp = baseSpeed;
        this.baseSpeedVerticalDown = baseSpeed;
        //setTimeout(function() { this.enableGravity(); }, 1500);
        //setTimeout(function() { this.enableGravity(); }.bind(this), gravityDelay);
    }

    render = () => {
        //console.log("X: " + this.transform.position.x);
        //console.log("Y: " + this.transform.position.y);
        ctx.drawImage(this.currentImg, 0, 0);
    }

    update = () => {
        if(this.dead)
            return;

        if(this.gravityEnabled){
            this.baseSpeedVerticalUp = baseSpeed + gravitySpeed
            this.baseSpeedVerticalDown = baseSpeed - gravitySpeed;
            this.transform.position.y -= gravitySpeed * Time.deltaTime;
        }
        
        if (keys["d"] == true) {
            if(this.transform.position.x + baseSpeed * Time.deltaTime - leftRightEdgeBuffer < width / 2){
                this.transform.position.x += baseSpeed * Time.deltaTime; /// speed is in units/s * s
            }
        }
        if (keys["a"] == true) {
            if(this.transform.position.x - baseSpeed * Time.deltaTime - this.width +  leftRightEdgeBuffer> -width / 2){
                this.transform.position.x -= baseSpeed * Time.deltaTime; /// speed is in units/s * s
            }
        }
        if (keys["w"] == true) {
            //this.gravityEnabled = false;
            //setTimeout(function() { this.enableGravity(); }.bind(this), gravityDelay);
            if(this.transform.position.y + this.baseSpeedVerticalUp * Time.deltaTime - topBottomEdgeBuffer  < height / 2){
                this.transform.position.y += this.baseSpeedVerticalUp * Time.deltaTime; /// speed is in units/s * s
            }
        }
        if (keys["s"] == true) {
            
            if(this.transform.position.y - this.baseSpeedVerticalDown * Time.deltaTime + topBottomEdgeBuffer - this.height > -height / 2){
                this.transform.position.y -= this.baseSpeedVerticalDown * Time.deltaTime; /// speed is in units/s * s /// speed is in units/s * s
            }
        }
    }

    die = () => {
        this.currentImg = this.deathImg;
        this.transform.scale.x = deadImageScale;
        this.transform.scale.y = deadImageScale;
        this.dead = true;
    }

    enableGravity= () => {
        this.gravityEnabled = true;
    }
}
