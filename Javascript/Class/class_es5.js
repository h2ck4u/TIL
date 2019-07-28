function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function () {
    console.log(this.name);
};

Person.prototype.toString = function () {
    return `Hello, I am ${this.name} My age is ${this.age}`;
};

function Developer(name, age, company) {
    Person.call(this, name, age);
    this.company = company;
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.toString = function () {
    return `I am Developer ${Person.prototype.toString.call(this)}`;
};