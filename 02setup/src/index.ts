console.log('typeScript')

// class
class User {
    private _courseCount = 1
    public email: string //everthing that don't mark in ts are public
    name: string
    private city: string = "Jaipur" //only accessable with in the class we can use private or # keywords
    constructor(email: string, name: string){
        this.email = email;
        this.name = name

    }
    get getAppleEmail(): string{
        return `apple${this.email}`
    }

//A getter is a method that gets the value of a property. It allows you to retrieve the value of a private variable or to calculate a value on the fly before returning it.
    get courseCount(): number {
        return this._courseCount
    }

//A setter is a method that sets the value of a property. It allows you to perform validation or execute other logic before setting the value of a private variable.
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

const userOne = new User('h@h.in', 'one');
// userOne.city

// setter and getter
class Person {
    private _age: number = 0;

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value >= 0) {
            this._age = value;
        } else {
            console.error("Age cannot be negative.");
        }
    }
}

let person = new Person();
person.age = 30; // Setting the age using the setter
console.log(person.age); // Getting the age using the getter
