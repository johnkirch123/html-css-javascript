const person = {
  name: 'John',
  walk() {
    console.log(this);
  },
  talk() {}
};

const walk = person.walk.bind(person);
walk();