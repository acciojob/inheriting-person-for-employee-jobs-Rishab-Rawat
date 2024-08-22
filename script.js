class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);  // Call the parent class constructor with `name` and `age`
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}
// Create an instance of Person
const alice = new Person("Alice", 25);
alice.greet();  // Output: Hello, my name is Alice, I am 25 years old.

// Create an instance of Employee
const bob = new Employee("Bob", 30, "Manager");
bob.jobGreet(); 