class Form {
  constructor() {
    this.input = createInput("Name");
   this.button = createButton('Play');
    this.greeting = createElement('h3');
  }
hide(){
  this.button.hide()
  this.input.hide()
  this.greeting.hide()
}
  display(){
    var title = createElement('h1')
    title.html("Car Racing Game");
    title.position(displayWidth/2-100,0);
    
    
    
    this.input.position(displayWidth/2-120, displayHeight-500);
    this.button.position(displayWidth/2-70, displayHeight-450);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount;
      player.update();
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-120, displayHeight-400);
      //text("hello"+name,130,160)
    });

  }
}
