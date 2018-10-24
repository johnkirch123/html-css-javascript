function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = () => {
  console.log("duplicate");
};

function Circle() {}

extend(Circle, Shape);

const c = new Circle();
