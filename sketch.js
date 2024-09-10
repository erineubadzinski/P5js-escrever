function setup() {
    createCanvas(800, 800);
    background("blue");
  }
  
  function draw() {
    
    stroke("blue");
    fill("rgb(163,15,218)")
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 100, 100);
  }
  }