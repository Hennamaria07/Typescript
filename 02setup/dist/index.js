"use strict";
console.log('typeScript');
// class
class User {
    constructor(email, name) {
        this._courseCount = 1;
        this.city = "Jaipur"; //only accessable with in the class we can use private or # keywords
        this.email = email;
        this.name = name;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    //A getter is a method that gets the value of a property. It allows you to retrieve the value of a private variable or to calculate a value on the fly before returning it.
    get courseCount() {
        return this._courseCount;
    }
    //A setter is a method that sets the value of a property. It allows you to perform validation or execute other logic before setting the value of a private variable.
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const userOne = new User('h@h.in', 'one');
// userOne.city
// setter and getter
class Person {
    constructor() {
        this._age = 0;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 0) {
            this._age = value;
        }
        else {
            console.error("Age cannot be negative.");
        }
    }
}
let person = new Person();
person.age = 30; // Setting the age using the setter
console.log(person.age); // Getting the age using the getter
