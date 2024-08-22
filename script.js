// complete this js code
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(Hello, my name is ${this.name} and I am ${this.age} years old.);
};


class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); 
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.);
    }
}

window.Person = Person;
window.Employee = Employee;