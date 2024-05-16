const score: Array<number> = []
const names:Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any):any{
    return val
}

// what ever the value type is taken will get return the same type
function identityThree<Type>(val: Type): Type {
    return val
}

identityThree(true)

//shortcut for Type
function identityFour<T>(val: T): T {
    return val
}

interface Bootle{
    brand: string,
    type: number
}

function identityFive({ brand, type }: Bootle): Bootle {
    return { brand: 'dfsj', type: 2 };
}

//array
function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[myIndex] //it will return the single value from the array
}

//in arrow function
const getMoreSearchProducts = <T,>(products: T[]): T => {
    //do some database operations
    const myIndex = 4
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}

anotherFunction(3, {connection: 'regjerhjh', username: "fndsj", password: 'dkidjg'})

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}