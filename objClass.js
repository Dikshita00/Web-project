
const person = {
  name: "Alice",
  age: 25,
  greet: function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

console.log("=== Object Example ===");
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
person.greet();





// Creating a class
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

 
  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm in grade ${this.grade}.`);
  }
}


const student1 = new Student("Bob", 10);
const student2 = new Student("Sara", 12);

console.log("\n=== Class Example ===");
student1.introduce();
student2.introduce();
