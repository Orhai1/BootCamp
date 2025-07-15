const prompt = require('prompt-sync')();

const questions = [
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What year is it?", answer: "2025" }
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
  const userAnswer = prompt(`Question ${i + 1}: ${questions[i].question} `);
  if (userAnswer === questions[i].answer) {
    score++;
  }
}

console.log(`Final Score: ${score}/${questions.length} correct!`);
