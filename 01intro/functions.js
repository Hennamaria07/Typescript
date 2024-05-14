var addTwo = function (num) {
    return num + 2;
};
addTwo(2);
// default
function defaultFun(name, isValid) {
    if (isValid === void 0) { isValid = false; }
    return { name: name, isValid: isValid };
}
console.log(defaultFun('hello'));
