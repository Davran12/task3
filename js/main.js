//! #1
let num = +prompt("Введите число");
if (num % 2 == 0) {
  console.log(`Число ${num} Четное`);
} else {
  console.log(`Число ${num} нечетное`);
}
//! #2
let arr = ["js", "css", "jq", "python", "c++", "React"];
console.log(arr[0]);
let last = arr[arr.length - 1];
console.log(last);
//! #3
const fruits = ["Apple", "Orange", "Banana", "Pineapple", "Cherry"];
let fruits1 = fruits.sort((a, b) => b.length - a.length);
let fruits2 = fruits.shift();
console.log(fruits2);
//! #4
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1.splice(1, 3);
console.log(arr2);
//! #5
let arr3 = ["один", "два", "три", "четыре"];
let arr4 = arr3.splice(0, 1)[0];
arr3.push(arr4);
console.log(arr3);
//! #6
let arr5 = [0, -11, 121, 3, 18];
let arr6 = Math.max(...arr5);
console.log(arr6);
//! EXTRA
let arr7 = ["a", "b", "c"];
let lendth = arr7.length;
for (let i = 0; i < lendth; i++) {
  arr7.push(arr7[0]);
}
console.log(arr7);
