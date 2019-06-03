var hierarchy = [];
var loadStateHandler = {
    start() {
      hierarchy = [];
      updateListeners.push(this);
      this.timeCount = 0;

      this.backgroundImage = new Image();
      this.backgroundImage.src = "Images/background.jpg";

      this.titleMessage = new Title();
      hierarchy.push(this.titleMessage);

      this.loadingMessage = new LoadingMessage();
      hierarchy.push(this.loadingMessage);

      this.loadingBar = new LoadingBar();
      hierarchy.push(this.loadingBar);
    },
    eventPump(event) {
      switch (event.name) {
        case "timer":
          this.update();
          this.render();
          break;
      }
    },
    nextScene() {
      state = PLAY_STATE;
      updateListeners.splice(updateListeners.indexOf(this), 1);
      updateStateHandler();
    },
    update(){
      this.timeCount++;
      if (this.timeCount > frameRate * loadScreenWaitTime) {
        this.nextScene();
      }

      for (var i = 0; i < hierarchy.length; i++) {
        var gameObject = hierarchy[i];
        gameObject.update();
      }
    },
    render(){
      // ctx.fillStyle = "black";
      // ctx.fillRect(0, 0, width, height);
      ctx.drawImage(this.backgroundImage, 0, 0);

      ctx.save(); {
        //Camera transformations
        ctx.translate(width / 2, height / 2);
        //ctx.scale(this.cameraZoom, this.cameraZoom);
  
        ctx.save(); {
          //World transformation
          ctx.scale(1, -1);
  
          ctx.save(); {
            for (var i = 0; i < hierarchy.length; i++) {
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