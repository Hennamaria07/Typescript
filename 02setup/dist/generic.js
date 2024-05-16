"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// what ever the value type is taken will get return the same type
function identityThree(val) {
    return val;
}
identityThree(true);
//shortcut for Type
function identityFour(val) {
    return val;
}
function identityFive({ brand, type }) {
    return { brand: 'dfsj', type: 2 };
}
//array
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex]; //it will return the single value from the array
}
//in arrow function
const getMoreSearchProducts = (products) => {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(3, { connection: 'regjerhjh', username: "fndsj", password: 'dkidjg' });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
