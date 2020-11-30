// package import
var readlinesync = require("readline-sync");
console.log("Welcome to this quiz");
var first = "what is your name ??  ";
// input
var name = readlinesync.question(first);
console.log("your name is  " + name);
// score
var score = 0;
// function
function quiz(question, answer) {
    console.log(question);
    var correctanswer = readlinesync.question("your answer is ");
    if (correctanswer === answer) {
        console.log("right!");
        score = score + 1;
        console.log(score);
    }
    else {
        console.log("wrong!");
        score = score - 1;
        console.log(score)
    }

}

var quizquestion = [
    {
        question: "where do you live ?? ",
        answer: "khurai"

    },
    {
        question: "what is your fevirate game ?? ",
        answer: "gta5"
    },
    {
        question: "what  do you like ?? ",
        answer: "hacking"
    },
    {
        question: "where you see you in feature ?? ",
        answer: "cyber security expert"
    },

]
for (i = 0; i < quizquestion.length; i++) {
    var firstquestion = quizquestion[i]
    quiz(firstquestion.question, firstquestion.answer);
}

console.log("total score is " + score);