#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the oprators to perform action",
        type: "list",
        name: "oprator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
//conditional statement
if (answer.oprator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.oprator === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.oprator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.oprator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please select valid oprator");
}
