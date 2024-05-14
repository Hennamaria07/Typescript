const addTwo = (num: number) => {
    return num + 2
}

addTwo(2)

// default
function defaultFun (name: string, isValid: boolean = false) {
return {name , isValid}
}

console.log(defaultFun('hello'))

// return more accurate value 
function getString (str: string) : string {
    return "hello"
}
console.log(getString('hola'));

// if function not returning anything then mention the type as void
// it return nothing
function secondFun (str: string) : void {
    console.log(str);
}

// The "never" type represents values that are never observed. It is used when a function throws an exception or terminates the execution of the program.
function thridFun (str: string) : never {
    throw new Error(str)
}

export {} //this is used to avoid this error Duplicate function implementation.