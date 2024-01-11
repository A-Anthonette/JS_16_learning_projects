const principal = 3500000;
const annualInterestRate = 25;
const monthlyPayment = 200000;

const monthlyInterestRate = annualInterestRate / (12 * 100);
const numerator = Math.log(1 - (principal * monthlyInterestRate) / monthlyPayment);
const denominator = Math.log(1 + monthlyInterestRate);

const numberOfMonths = -numerator / denominator;

console.log("Number of months:", Math.ceil(numberOfMonths));
