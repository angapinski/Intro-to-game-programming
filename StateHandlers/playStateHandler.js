var hierarchy = [];
var character;
var gameOver;
var scoreBox;
var playStateHandler = {
    start() {
      gameOver = false
      hierarchy = [];
      updateListeners.push(this);
      this.rotation = 0;

      this.backgroundImage = new Image();
      this.backgroundImage.src = "Images/background.jpg";

      character = new Character(0,0);
      hierarchy.push(character);

      this.cameraZoom = 50;
      this.frameCounter = 0;

      //Resetting Options
      currentScore = 0;
      objectSpeed = 120;
      currentScoreMultiplier = 1;
      baseTimeBetweenObstacles = 4;

      scoreText = new ScoreText();
      hierarchy.push(scoreText);

      scoreBox = new ScoreBox();
      hierarchy.push(scoreBox);
    },
    eventPump(event) {
      switch (event.name) {
        case "click":
          //this.nextScene();
            break;
        case "timer":
          this.update();
          this.render();
          break;
      }
    },
    nextScene() {
      state = END_STATE;
      updateListeners.splice(updateListeners.indexOf(this), 1);
      updateStateHandler();
    },
    update() {
      if(this.frameCounter > baseTimeBetweenObstacles * frameRate){
        this.newObstacle();
        this.frameCounter = 0;
      }

      //console.log("H Size: " + hierarchy.length)

      if(!gameOver){
        for (var i = 0; i < hierarchy.length; i++) {
          var gameObject = hierarchy[i];
          gameObject.update();
  
          if(gameObject.collidable == true && gameObject != character) {
            if(this.isInCollision(character, gameObject)){
  
              setTimeout(function() {
                this.nextScene();  
              }.bind(this), 3000);

              gameOver = true;
              character.die();
            }
          }
        }

        this.frameCounter++;
      }

      
    },
    newObstacle(){
      //console.log("creating obstacle");
      var gapDistance = Math.floor(Math.random() * (gapMaxHeight - gapMinHeight + 1) + gapMinHeight);
      //console.log(gapDistance);

      var maxStartHeight = height - gapDistance;
      var startHeight = Math.floor(Math.random() * maxStartHeight - height / 2);
      //console.log("start: " + startHeight);
      
      var upperObstacle = new Obstacle(gapDistance, startHeight, null);
      var lowerObstacle = new Obstacle(gapDistance, null, upperObstacle);

      hierarchy.push(upperObstacle);
      hierarchy.push(lowerObstacle);
    },
    isInCollision(object1, object2) {
      var p1 = object1.transform;
      var p2 = object2.transform;

      var xDiffLeft = p1.position.x - p2.position.x;
      var xDiffRight = p2.position.x + object2.thisWidth * p2.scale.x - p1.position.x;

      //console.log("height: " + object2.thisHeight)
      //console.log("XDIFF: " + xDiff)
      //((xDiffLeft < object1.width && xDiffLeft > 0) || (xDiffRight < object1.width && xDiffLeft > 0))
      if (p1.position.x - collisionBufferHorizontal >= p2.position.x && p1.position.x - object1.width + collisionBufferHorizontal <= p2.position.x + object2.thisWidth * p2.scale.x) {
        //console.log("IN X RANGE");
        if((object2.isUpper && p1.position.y - collisionBufferVertical > p2.position.y)) {
          //console.log("HITTING TOP " + p1 + " " + p2.position.y);
          return true;
        }
        else if(!object2.isUpper && p1.position.y - object1.height + collisionBufferVertical < p2.position.y + object2.transform.scale.y*object2.height) {
          //console.log("HITTING BOTTOM " + p1 + " " + p2.position.y);
          return true;
        }
          
      }
      else {

      return false;
      } 
    },
    render(){
      // ctx.fillStyle = "blue";
      // ctx.fillRect(0, 0, canvas.width, canvas.height);

      //clear the viewport
      //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      ctx.drawImage(this.backgroundImage, 0, 0);
     
      ctx.save(); {
        //Camera transformations
        ctx.translate(width / 2, height / 2);
        //ctx.scale(this.cameraZoom, this.cameraZoom);
  
        ctx.save(); {
          //World transformation
          ctx.scale(1, -1);
  
          ctx.save(); {
            //for (var i = 0; i < hierarchy.length; i++) {
            for (var i = hierarchy.length - 1; i >= 0; i--) {
              var gameObject = hierarchy[i];
                ctx.save(); {
                ctx.translate(gameObject.transform.position.x, gameObject.transform.position.y);
                ctx.scale(gameObject.transform.scale.x, gameObject.transform.scale.y);
  
                gameObject.render(ctx);
                }
              ctx.restore();
            }
          }
          ctx.restore();
        }
        ctx.restore();
      }
      ctx.restore();
    }
  };