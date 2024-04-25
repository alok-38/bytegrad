let fruit = ['apple', 'orange', 'banana', 'tomato'];
let popped = fruit.pop();

console.log(popped); // "tomato"
console.log(fruit); // ["apple", "orange", "banana"]

let splicedFruit = fruit.splice(-1)
console.log(splicedFruit);
console.log(fruit);