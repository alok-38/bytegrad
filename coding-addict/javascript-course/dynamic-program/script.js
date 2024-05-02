// Initialize an empty array to store scores
const scores = [];

// Prompt the user to input scores until they enter a non-numeric value
while (true) {
  const input = prompt(
    "Enter a score (or enter a non -numeric value to finish):"
  );
  const score = parseFloat(input);

  // Check if the input is a valid number
  if (!isNaN(score)) {
    scores.push(score);
  } else {
    break;
  }
}

// Calculate total score
const totalScore = scores.reduce((sum, score) => sum + score, 0);

// Calculate average score
const averageScore = totalScore / scores.length;

// Create an array with the calculated data
const data = [
  {
    "Total Score": totalScore,
    "Average Score": averageScore,
  },
];

// Display the data in a table format
console.table(data);
