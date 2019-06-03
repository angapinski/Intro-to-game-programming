var endStateHandler = {
    start() {
      this.hierarchy = [];
      updateListeners.push(this);
      this.deathMessage = new DeathMessage();
      this.highScoreMessage = new HighScoreMessage();
      this.explosionImage = new Image();
      this.explosionImage.src = "Images/explosion.png"
      
      this.continueMessage = new ContinueMessage("Continue");
      this.hierarchy.push(this.deathMessage)
      this.hierarchy.push(this.highScoreMessage);
      this.hierarchy.push(this.continueMessage);
    },
    eventPump(event) {
      switch (event.name) {
        case "click":
          this.nextScene();
          break;
        case "timer":
          this.update();
          this.render();
          break;
      }
    },
    nextScene() {
      state = MENU_STATE;
      updateListeners.splice(updateListeners.indexOf(this), 1);
      updateStateHandler();
    },
    update() {
      
    },  
    render() {
      ctx.fillStyle = "red";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save(); {
        //Camera transformations
        ctx.translate(width / 2, height / 2);
        //ctx.scale(this.cameraZoom, this.cameraZoom);
  
        ctx.save(); {
          //World transformation
          ctx.scale(1, -1);
  
          ctx.save(); {
            for (var i = 0; i < this.hierarchy.length; i++) {
              var gameObject = this.hierarchy[i];
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