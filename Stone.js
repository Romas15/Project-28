class Stone {
  constructor(x, y, r) {
    var options = {
      isStatic: false,
      restitution: 0,
      friction: 1,
      density: 1.2,
    };
    this.x = x;
    this.y = y;
    this.r = r;
    // this.width = width;
    // this.height = height;

    this.image = loadImage("Images/stone.png");
    var imagepos = this.image.position;
    this.body = Bodies.circle(this.x, this.y, this.r / 5, options);
    World.add(world, this.body);
  }
  display() {
    var stonepos = this.body.position;

    push();
    translate(stonepos.x, stonepos.y);
    strokeWeight(0);
    ellipse(0, 0, 0, 0);
    imageMode(CENTER);
    image(this.image, 0, 0, 80, 80);
    pop();
  }
}
