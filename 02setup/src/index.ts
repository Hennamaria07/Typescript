console.log('typeScript')

// class
class User {
    public email: string //everthing that don't mark in ts are public
    name: string
    private city: string = "Jaipur" //only accessable with in the class we can use private or # keywords
    constructor(email: string, name: string){
        this.email = email;
        this.name = name

    }
}

const userOne = new User('h@h.in', 'one');
// userOne.city