// USING AN OBJECT -----------------------------
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   },
//   draw: function() {
//     console.log("draw");
//   }
// };

//circle.draw();

// FACTORY FUNCTION --------------------------------
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function() {
//       console.log(`Drawing a circle with radius ${radius}`);
//     }
//   };
// }

// const circle = new createCircle(3);
// circle.location = { x: 1 };

// // good use case for using property notation. When you have a
// // variable in a dynamic situation
// const propertyName = "location";
// circle[propertyName] = { x: 1 };
// // delete circle["location"];

// for (let key in circle) {
//   if (typeof circle[key] !== "function") console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ("radius" in circle) console.log("Circle has a radius");

// CONSTRUCTOR FUNCTION -----------------------------------
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = () => {
//     console.log("draw");
//   };
// }

// const another = new Circle(1);
// another.draw();

// ABSTRACTION --------------------------------------------------
// hide the details and expose only what is necessary
// function Circle(radius) {
//   this.radius = radius;

//   let defaultLocation = { x: 0, y: 0 };

//   let computeOptimumLocation = function(factor) {
//     // ...
//   };

//   this.draw = () => {
//     computeOptimumLocation(0.1);
//     // defaultLocation
//     // this.radius
//     console.log("draw");
//   };
// }

// const circle = new Circle(10);
// circle.
// circle.draw();

// GETTERS AND SETTERS ------------------------------------------------

// function Circle(radius) {
//   this.radius = radius;

//   let defaultLocation = { x: 0, y: 0 };

//   this.getDefaultLocation = () => {
//     return defaultLocation;
//   };
//   this.draw = () => {
//     console.log("draw");
//   };

//   Object.defineProperty(this, "defaultLocation", {
//     get: function() {
//       return defaultLocation;
//     },
//     set: function(value) {
//       if (!value.x || !value.y) throw new Error("Invalid Location.");
//       defaultLocation = value;
//     }
//   });
// }

// const circle = new Circle(10);
// console.log(circle.getDefaultLocation(1));
// circle.getDefaultLocation();

// STOP WATCH OBJECT CHALLENGE ------------------------------------------------
function StopWatch() {
  let startTime = 0;
  let stopTime = 0;
  let duration = 0;

  this.reset = () => {
    startTime = 0;
    stopTime = 0;
    duration = 0;
  };

  this.start = () => {
    if (startTime > 0) throw new Error("Stopwatch already started!");
    else startTime = performance.now();
  };

  this.stop = () => {
    if (!startTime) throw new Error("Stopwatch not started!");
    else if (stopTime) throw new Error("Stopwatch already stopped!");
    else {
      stopTime = performance.now();
      duration = Math.ceil(stopTime - startTime);
    }
  };

  Object.defineProperty(this, "duration", {
    get: () => {
      return `Total duration is ${Math.round(duration * 0.001)} seconds.`;
    }
  });
}
