class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }

  calcArea() {
    return this.w * this.h;
  }
}

class Square extends Rectangle {
  constructor(s) {
    super(s, s);
  }
}

const r = new Rectangle(2, 6);
const s = new Square(5);

console.log(Rectangle.prototype);
