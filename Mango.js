class Mango {
  constructor(x, y, r) {
    var options = {
      isStatic: true,
      restitution: 0,
      friction: 1,
    };

    this.x = x;
    this.y = y;
    this.r = r;

    this.body = Bodies.circle(this.x, this.y, this.r, options);
    this.image = loadImage("Images/mango.png");
    World.add(world, this.body);
  }
  display() {
    var mangopos = this.body.position;

    push();
    fill(100);
    strokeWeight(0);
    ellipse(0, 0, 0, 0);
    imageMode(CENTER);
    image(this.image, this.x, this.y, 60, 60);
    pop();
  }
}
