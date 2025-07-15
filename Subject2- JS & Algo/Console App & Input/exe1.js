const args = process.argv;

const num1 = Number(args[2]);
const operator = args[3];
const num2 = Number(args[4]);

if (operator === undefined || num1 === undefined || num2 === undefined) {
    console.log("Error: Please provide two numbers and an operator.");
}

if (operator==="-"){
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
}
else if (operator==="+"){
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
}                   
else if (operator==="*"){
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
}   
else if (operator==="/"){
    if (num2 === 0) {
        console.log("Error: Division by zero.");
        return;
    }
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
}
