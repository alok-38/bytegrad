const calculateTotal = (subTotal, taxReturn) => {
  const sum = subTotal + taxReturn;
  return sum;
};

// Assuming order1, order2, and order3 are defined elsewhere in your code
const order1 = 50; // Example value
const order2 = 10; // Example value
const order3 = 20; // Example value

const total = calculateTotal(order1, order2);

// Assuming you want to log order1, order2, and order3 along with the total
console.table({ order1, order2, order3, total });
