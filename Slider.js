/*class Slider {
  constructor(body1, pointB) {
    var options = {
      bodyA: body1,
      pointB: pointB,
      stiffness: 0.04,
      length: 10,
    };
    this.pointB = pointB;
    this.Slider = Constraint.create(options);
    World.add(world, this.Slider);
  }

  fly() {
    this.Slider.bodyA = null;
  }
  attach(bodyA) {
    this.Slider.bodyA = bodyA;
  }

  display() {
    if (this.Slider.bodyA) {
      var pointA = this.bodyA.position;
      var pointB = this.pointB;

      strokeWeight(2);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}*/

class Slider {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.004,
      length: 10,
    };
    this.pointB = pointB;
    this.slider = Constraint.create(options);
    World.add(world, this.slider);
  }

  attach(body1) {
    this.slider.bodyA = body1;
  }
  display() {
    if (this.slider.bodyA) {
      var pointA = this.slider.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
  fly() {
    this.slider.bodyA = null;
  }
}
