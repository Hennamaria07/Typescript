"use strict";
console.log('typeScript');
// class
class User {
    constructor(email, name) {
        this.city = "Jaipur"; //only accessable with in the class we can use private or # keywords
        this.email = email;
        this.name = name;
    }
}
const userOne = new User('h@h.in', 'one');
// userOne.city
