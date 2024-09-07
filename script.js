// TASK 1
const arr = [3, true, "Seljan", "Fidan"];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == "string") {
    console.log(arr[i]);
  }
}
// Task 1 = Task 2

// Task 3
const stringArray = ["seljan", "fidan", "matrix", "anar"];
for (let i = 0; i < stringArray.length; i++) {
  if (stringArray[i].toLowerCase() == "matrix") {
    stringArray.splice(i, 1);
    console.log(stringArray);
  }
}

// Task 4
let number = 1;

while (number <= 100) {
  console.log(number);
  if (number === 45) {
    console.log("The last number is 45.");
    break;
  }
  number++;
}

// Task 5
const numberArray = [0, 3, 353744, 23, 933];

for (let i = 0; i < numberArray.length; i++) {
  let numberLength = String(numberArray[i]).length;
  console.log(numberArray[i] + " rəqəmi " + numberLength + " rəqəmlidir");
}

// Task 6
const namesArray = ["Seljan", "Fidan", "Anar"];

for (let i = 0; i < namesArray.length; i++) {
  console.log("Hello " + namesArray[i]);
}

// Task 7
const numberArray1 = [-3, 20, 23, 0, 50];
let sum = 0;

for (let i = 0; i < numberArray1.length; i++) {
  sum += numberArray1[i];
}

console.log("Sum: " + sum);

// TASK 8
const numberArray2 = [-5, 10, 35];

for (let i = 0; i < numberArray2.length; i++) {
  console.log(numberArray2[i] * 2);
}
// Task 9
const myString = "m";
const regex = /m/i;

for (let i = 0; i < myString.length; i++) {
  if (regex.test(myString[i])) {
    console.log("success");
    break;
  } else {
    console.log("failure");
    break;
  }
}

// Task 10
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = [];

for (let i = originalArray.length - 1; i >= 0; i--) {
  reversedArray.push(originalArray[i]);
}

console.log(reversedArray);
//