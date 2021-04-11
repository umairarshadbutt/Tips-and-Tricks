// Converting to Boolean
console.log("Converting to Boolean")
const isTrue = !0;
const isFalse = !1; //isFalse=!!0

console.log("The result will be true: "+isTrue);
console.log("Type of true is: ", typeof true);


//Converting to String
console.log("\nConverting to String")
const value = 1 + "";

console.log("Value ofter converting to string: "+value);
console.log("Type of value is: ", typeof value);

//Converting a string into a number
console.log("\nConverting a string into a number")
let int = "10";
int = +int
console.log("Value of int: "+ int);
console.log("Type of value is: ", int);
console.log("+true to number: " + +true);
console.log("+false to number: " + +false); 

//Quick Powers
console.log("\nQuick Powers")
console.log("2 ** 3: "+ 2 ** 3);
console.log("Math.pow(2,3): ", Math.pow(2,3));

//Quick Float to Integer Conversion
console.log("\nQuick Float to Integer Conversion")
console.log("24.9 | 0: ", 24.9 | 0);//24
console.log("-24.9 | 0: ", -24.9 | 0);//24
console.log("27433/100 | 0: ", 27433/100 | 0);//274
