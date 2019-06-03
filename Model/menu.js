class Menu extends GameObject {

    constructor(){
        super();
        this.transform.position.x = 0;
        this.transform.position.y = 0;
        this.transform.scale.x = 1;
        this.transform.scale.y = 1;

        this.menuPartsList = [];
        this.menuButtonsList = [];

        this.menuHeader = class extends GameObject {
            constructor() {
              super();
              this.transform.position.x = 0;
              this.transform.position.y = 0;
            }
            render = () => {
              ctx.fillStyle = menuBgColor;
              ctx.fillRect(0, 0, this.thisWidth, this.height);
            }
            update = () => {
              return this.height * this.width;
            }
        }

      var menuButton1 = new MenuButton(-menuButtonWidth / 2, 0);
      var menuButtonText1 = new MenuButtonText(0, menuButton1.transform.position.y + menuButtonHeight / 2, "Play");
      this.menuPartsList.push(menuButton1);
      this.menuButtonsList.push(menuButton1);
      this.menuPartsList.push(menuButtonText1);

      var menuButton2 = new MenuButton(-menuButtonWidth / 2, -menuButtonHeight - menuButtonBuffer);
      var menuButtonText2 = new MenuButtonText(0, menuButton2.transform.position.y + menuButtonHeight / 2, "High Scores");
      this.menuPartsList.push(menuButton2);
      this.menuButtonsList.push(menuButton2);
      this.menuPartsList.push(menuButtonText2);

      for(var i = 0; i < this.menuPartsList.length; i++){
        hierarchy.push(this.menuPartsList[i]);
      }

    }

    update = () => {
      
    }

    render = () => {
    }
}

// class MenuButtonText extends GameObject{
//   constructor(x, y, message) {
//     super();
//     this.transform.position.x = x;
//     this.transform.position.y = y;
//     this.transform.scale.x = 1;
//     this.transform.scale.y = -1;

//     this.messageText = message;
//   }
//   render = () => {
//     //ctx.strokeStyle = "black";
//     ctx.fillStyle = 'black';
//     ctx.textBaseline = "middle";
//     ctx.textAlign = "center";
//     ctx.font = "30px Comic Sans MS";
//     ctx.fillText(this.messageText, 0, 0);
//   }

//   update = () => {
//   } 
// }
