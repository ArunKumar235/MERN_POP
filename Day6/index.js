// console.log("hello")
// declarations
//primary datatypes
// a=10
// b=15
// c=true
// d=10.345
// e="hi"
// f='h'
// console.log(typeof(a),typeof(b),typeof(c),typeof(d),typeof(e),typeof(h))
// var a=10;  //global scope
// let b="hi" //local scope
// const c=true //cannot be modified
// console.log(c)
// c=false
//  --secondary datatypes
// 1)array
// arr=[1,23.3,"hi"]
// console.log(arr[1])
// console.log(typeof(arr)) // all the secondary datatypes are recognized as object type
// 2)object
// type 1)
// obj1={
//     firstname:"st.Joseph's",
//     lastname:"institute",
//     depts:["CSE","ADS","IT","ECE"],
//     training:"mern"
// }
// console.log(obj1)
// type 2)
// obj2={}
// obj2["firstname"]="hello"
// obj2["lastname"]="world"
// obj2["training"]=["GIT","HTML","CSS","JS","mern"]
// console.log(obj2) //takes the space of the system while printing
// console.log(obj2.firstname)
// console.log(obj2["firstname"]) //quotes compulsory(single or double)
// type 3)
// obj3=new Object()
// console.log(obj3)
// obj3.training="mern"
// obj3.dept=["cse","it","ads"]
// console.log(obj3) 
// 3)set
// set=new Set()
// console.log(set)
// set=new Set("hello")
// console.log(set)
// set=new Set(["hello"])
// console.log(set)
// set.add("hi") //added based on the prev added type
// console.log(set)
// set.add("hi")
// console.log(set) //no duplicates added
//logical operators
// console.log(5 && 10)
// console.log(10 && 5)
// console.log(true && 10)
// console.log(false && 10)
// console.log(false || 10)
// console.log(true || 5)
// console.log(5 || true)
// console.log(5 || 10)
// console.log(10 || 5)
// console.log(false && true)
// console.log(true && false)
// console.log(false || true)
// console.log(true || false)
//Relational Operators
a='5'
b=5
console.log("This is == operator",a==b); // datatype is not consider
console.log("this is === operator",a===b); //datatype is consider
//bitwise 
console.log(70&35);
console.log(70^35);
c=1
console.log(~c);