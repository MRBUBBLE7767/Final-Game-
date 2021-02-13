class start{
    constructor() {
        this.button = createButton("start");
        this.title = createElement('h2');

      }
      hide(){
       this.button.hide();
       this.title.hide();

      }
    
      display(){
        this.title.html("Laundry Shooter");
        this.title.position(displayWidth/2 - 150, 0);
        this.button.position(600,300);
        this.button.mousePressed(()=>{
            this.title.hide();
            this.button.hide();
            gameState="playing";
        });
      }
      
      
  
    


}