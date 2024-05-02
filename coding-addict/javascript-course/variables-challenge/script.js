const firstName = "Alokananda";
const lastName = "Y";
let address = "main street";
console.table(firstName, lastName, address);
address = "first street";
console.table(firstName, lastName, address);

// Concatenate strings
const street = "Main street";
const country = "India";
const fullMailingAddress = `${street}, ${country}`;
console.log(fullMailingAddress);

// Numbers
const score1 = 5;
const score2 = 89;
const score3 = 45;

const totalScore = score1 + score2 + score3;

const averageScore = (score1 + score2 + score3) / 3;

const data = [
  {
    "Total Score": totalScore,
    "Average Score": averageScore,
  },
];

console.table(data);


