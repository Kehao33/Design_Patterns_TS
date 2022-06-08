abstract class Shape {
  abstract draw(): void;
}

class Circle extends Shape {
  draw() {
    console.log("draw Circle");
  }
}

class Rectangle extends Shape {
  draw() {
    console.log("draw Rectangle");
  }
}

// 装饰器模式的，
abstract class ColorfulShape extends Shape {
  constructor(public shape: Shape) {
    super();
  }
  abstract draw(): void;
}

class RedColorfulShape extends ColorfulShape {
  draw() {
    this.shape.draw();
    console.log("Color it red.");
  }
}

class GreenColorfulShape extends ColorfulShape {
  draw() {
    this.shape.draw();
    console.log("Color it green.");
  }
}

// 画一个红色的圆形
const readColorfulCircle = new RedColorfulShape(new Circle());
readColorfulCircle.draw();

// 画一个红色的圆形
const greenColorfulCircle = new GreenColorfulShape(new Circle());
greenColorfulCircle.draw();
