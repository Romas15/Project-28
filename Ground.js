/*class Ground {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(this.x, this.y, 500, 20, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display() {
    rectMode(CENTER);
    fill("green");
    rect(400, 660, 500, 20);
  }
}*/

class Ground {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(500, 700, 800, 130, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    rectMode(CENTER);
    fill("green");
    rect(500, 700, 1000, 130);
  }
}
