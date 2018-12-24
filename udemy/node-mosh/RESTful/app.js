const express = require("express");

const app = express();

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" }
];

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  // res.send(req.params.id);
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).json({ err: "Course does not exist" });
  res.send(course);
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log("Server running on port: " + port));

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("Hello World");
//     res.end();
//   }

//   if (req.url === "/api/customers") {
//     res.write(JSON.stringify([1, 2, 3]));
//     res.end();
//   }
// });

// server.listen(3001);

// console.log("Listening on port 3001...");
