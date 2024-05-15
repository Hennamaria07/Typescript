// const user: (string | number)[] = [1, "hc"]
// A tuple in TypeScript is a special type of array that allows you to have a fixed number of elements, each with a known and specific type.
let tUser: [string, number, boolean]

tUser = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "hc.com"
// newUser.push(false) throws an error

export {}