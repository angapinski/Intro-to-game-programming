var hierarchy = [];
var menuStateHandler = {
        start() {
        hierarchy = [];
        updateListeners.push(this);

        this.backgroundImage = new Image();
        this.backgroundImage.src = "Images/background.jpg";

        this.mainMenu = new Menu();
        
        var title = new Title();
        hierarchy.push(title);

        var tempChar = new Character(-150, 150);
        hierarchy.push(tempChar);
      },
      eventPump(event) {
        switch (event.name) {
          case "click":
            this.clicked((event.location.x - (width / 2)) , event.location.y - ((height / 2) / (height/640)));
            break;
          case "timer":
            this.update();
            this.render();
            break;
        }
      },
      clicked(x, y){
        for(var i = 0; i < this.mainMenu.menuButtonsList.length; i++){
          console.log("X: %d  Y: %d" , x, y)
          var gameObject = this.mainMenu.menuButtonsList[i];
          if(x > gameObject.transform.position.x && x < gameObject.transform.position.x + gameObject.width){
            if(y > gameObject.transform.position.y - gameObject.height && y < gameObject.transform.position.y){
              this.nextScene();
            }
          }
        }
      },
      nextScene() {
        state = LOAD_STATE;
        updateListeners.splice(updateListeners.indexOf(this), 1);
        updateStateHandler();
      },
      update() {
        
      },
      render(){
        //ctx.fillStyle = "Chartreuse";
        //ctx.fillRect(0, 0, width, height);
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