//1. variable
var a = 10 
//-------------------------------------------

//2. ArrowFunction
var arrowFunction = () => {
    console.log("Arrow Function");    
}
arrowFunction()
//-------------------------------------------

// 3. Scoping
//    /   \
//   /     \
//  /       \
// Global   Local
// var      let, const

var a = 45 
{
    a = 20 
    console.log(a); // 20
    let b = 100
    console.log(b); // 100
    let c = 200
    console.log(c); // 200
    a = 400
    console.log(a); // 400 
    var e = 500 
    f = 1000 // variable attached to global scope works like var
}
console.log(a); // 400
console.log(e); // 500
console.log(f); // 1000
// console.log(c); // ReferenceError: c is not defined
//-------------------------------------------

// 4. Ternary Operator
var age = 20
var isAdult = age >= 18 ? "Adult" : age 
console.log(isAdult); // Adult
console.log((age%2) ? "Odd" : "Even"); // 1 - true - Odd, 0 - false - Even
//-------------------------------------------

// 5. Spread Operator
// Array
var arr1 = [1,2,3]
var arr2 = [4,5,6]
var arr3 = [...arr1, ...arr2]
console.log(arr3); // [1,2,3,4,5,6]
// Object
var obj1 = {name: "John", age: 20}
var obj2 = {city: "Delhi"}
var obj3 = {...obj1, ...obj2}
console.log(obj3); // {name: "John", age: 20, city: "Delhi"}
//-------------------------------------------

// 6. Rest Operator
// Array
var arr = [1,2,3,4,5]
var [a,b, ...rest] = arr
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3,4,5]
// Object
var obj = {name: "John", age: 20, city: "Delhi"}
var {name, ...rest} = obj
console.log(name); // John
console.log(rest); // {age: 20, city: "Delhi"}
//-------------------------------------------

// 7. Destructuring
// Array
var arr = [1,2,3]
var [a,b,c, d] = arr
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // undefined
// Object
var obj = {name: "John", age: 20}
var {name, age} = obj
console.log(name); // John
console.log(age); // 20
//-------------------------------------------

// 8. Hoisting

// Variable Hoisting
// var, let, const
// var - hoisted and initialized with undefined
// let, const - hoisted but not initialized
console.log(x); // undefined
var x = 10
console.log(x); // 10
// console.log(y) // ReferenceError: Cannot access 'var1' before initialization
let y = 20
console.log(y); // 20

// Function Hoisting
// Arrow Function - ReferenceError: Cannot access 'func' before initialization
// Function Declaration - function hoisted and initialized
// Function Expression - ReferenceError: Cannot access 'func' before initialization

// func() // ReferenceError: Cannot access 'func' before initialization, for Arrow Function
var func = () => {
    console.log("Arrow Function");
}
func()

func1() // Function called and output is printed - function declaration
function func1() {
    console.log("Function Declaration");
}
func1()
      
// func2() // ReferenceError: Cannot access 'func2' before initialization, for Function Expression
var func2 = function() {
    console.log("Function Expression");
}
func2()

//-------------------------------------------

// 9. Class and Object
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

var person1 = new Person("John", 20)
person1.display()
//-------------------------------------------

// 10. Callback Function
function add(a, b, callback) {
    var sum = a + b
    callback(sum)
}
function display(result) {
    console.log(result);
}
add(10, 20, display) // 30
//-------------------------------------------