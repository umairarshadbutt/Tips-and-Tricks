//1. Converting to Boolean
console.log("Converting to Boolean")
const isTrue = !0;
const isFalse = !1; //isFalse=!!0

console.log("The result will be true: "+isTrue);
console.log("Type of true is: ", typeof true);


//2. Converting to String
console.log("\nConverting to String")
const value = 1 + "";

console.log("Value ofter converting to string: "+value);
console.log("Type of value is: ", typeof value);

//3. Converting a string into a number
console.log("\nConverting a string into a number")
let int = "10";
int = +int
console.log("Value of int: "+ int);
console.log("Type of value is: ", int);
console.log("+true to number: " + +true);
console.log("+false to number: " + +false); 

//4. Quick Powers
console.log("\nQuick Powers")
console.log("2 ** 3: "+ 2 ** 3);
console.log("Math.pow(2,3): ", Math.pow(2,3));

//5. Quick Float to Integer Conversion
console.log("\nQuick Float to Integer Conversion")
console.log("24.9 | 0: ", 24.9 | 0);//24
console.log("-24.9 | 0: ", -24.9 | 0);//24
console.log("27433/100 | 0: ", 27433/100 | 0);//274

//6. Comparing Arrays
console.log("\nComparing Arrays");
const hasSameElements = (a, b) => {
    return a.length === b.length && a.every((v,i) => v===b[i])
}
console.log("hasSameElements([1,2],[2,3]): ", hasSameElements([1,2],[2,3]));//false
console.log("hasSameElements([1,2],[1,2]): ", hasSameElements([1,2],[1,2]));//true

//7. Empty and non-empty values
console.log("\nEmpty and non-empty values");
const arr = [0,1,2,null,undefined,"",false];
const nonEmptyValues = arr.filter(Boolean);
const hasEmptyValues = arr.some(Boolean);
const hasEmptyEveryValues = arr.every(Boolean);
console.log("nonEmptyValues: ", nonEmptyValues);
console.log("hasEmptyValues: ", hasEmptyValues);
console.log("hasEmptyEveryValues: ", hasEmptyEveryValues);

//8. Getting your Last Item(s) in an Array
console.log("\nGetting your Last Item(s) in an Array");
let array = [1, 2, 3, 4 ,5 ,6 ,7, 8, 9];
console.log("array.slice(-1): ",array.slice(-1));//[9]
console.log("array.slice(-2): ",array.slice(-2));//[8, 9]
console.log("array.slice(-3): ",array.slice(-3));//[7, 8, 9]




//9. Truncating an Array
console.log("\nTruncating an Array");
array.length=4;
console.log("Array after Truncating: ", array)