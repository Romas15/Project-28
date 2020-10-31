class Tree {
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

    this.width = width;
    this.height = height;

    this.image = loadImage("Images/tree.png");
    this.body = Bodies.circle(this.x, this.y, this.r, options);

    World.add(world, this.body);
  }
  display() {
    push();
    fill(100);
    strokeWeight(0);
    ellipse(0, 0, 0, 0);

    image(this.image, 430, 160, 500, 500);
    pop();
  }
}
