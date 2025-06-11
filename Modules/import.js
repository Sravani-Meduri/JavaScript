//import keyword is used to bring the code that was exported from another file
// import { bankName } from "./export.js";
// console.log(bankName);

import { getEmployeeDetails } from "./export.js";
getEmployeeDetails("Sravani", "Analyst I Software Engineer");

import { multiply, divide } from "./export.js";
console.log(multiply(2,8));
console.log(divide(16,2));

import { PlayerDetails } from "./Player.js";
PlayerDetails("MS Dhoni", "CSK")

import { bankDetails } from "./export.js";
bankDetails("HDFC Bank", "Hari Priya")
