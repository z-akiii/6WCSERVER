const {add, subtract, multiply, divide} = require('./calculation.js')

const rph = 300;
const hpd = 4;
const dpw = 6;
const tax = 0.10;
const sss = 1200;
const pagibig = 300
const philhealth = 400;

const gross = multiply(rph, multiply(hpd, dpw));
const taxAmount = multiply(gross, tax);
const totalD = add(add(sss, pagibig), philhealth);
const totalDwithtax= add(totalD, taxAmount);
const net = subtract(gross, totalDwithtax);

console.log('Gross Income:', gross);
console.log('Tax:', taxAmount);
console.log('SSS:', sss);
console.log('Pag-Ibig Fund:', pagibig);
console.log('PhilHealth:', philhealth);
console.log('Total Deductions:', totalDwithtax);
console.log('Net Salary:', net);