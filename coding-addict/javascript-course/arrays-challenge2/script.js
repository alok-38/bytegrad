// Arrays and loops
const names = ["anna", "susy", "bob"];
const lastName = "shakeAndBake";
let namesArray = [];

// for loop
for (let index = 0; index < names.length; index++) {
	namesArray.push(`${names[index]} ${lastName}`);
}
console.table(namesArray);