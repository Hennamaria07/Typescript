const User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isAvtive: true
}

function createUser({name: string, isPaid: boolean}){}

let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}

createUser(newUser)



function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}

// type aliases
type UserType = {
    readonly _id?: string, //this field cannot be rewrite
    name: string,
    email: string,
    isActive: boolean
}


function createUsertwo(user: UserType): UserType{
    return {name: "", email: "", isActive: true}
}

createUsertwo({name: "", email: "", isActive: true})
export {}