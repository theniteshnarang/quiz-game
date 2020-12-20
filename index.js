var readlineSync = require("readline-sync");

var userName= readlineSync.question("Enter your Name : ");
console.log("\n Welcome "+userName+" to \"Do you Know Nitesh?\"")

console.log("\n Note: you will recieve set of questions and you have to answer it using yes/no only. \n")

var score = 0;

function quiz(question, answer) {

  var userAnswer = readlineSync.question(question +"(Enter e to exit)? ");

  if (userAnswer === answer) {
    console.log("Right");
    score++;
  }
  else if(userAnswer === "e")
    return userAnswer;
  else
    console.log("Wrong");
}

//Array of Objects
ques = [
  {
    question: "Am I older than 25",
    answer: "no"
  }, {
    question: "Am I Software Engineer",
    answer: "yes"
  },{
    question: "Do I do programming",
    answer: "yes"
  },{
    question: "Do I read books",
    answer:"yes"
  },{
    question: "Do I drink Alcohol",
    answer:"yes"
  },{
    question: "Do I watch sit-coms",
    answer: "yes"
  }
];

let userAns,i=0;

do{ 
  userAns = quiz(ques[i].question, ques[i].answer);
  i++;
}while(userAns !== "e" && i < ques.length);

console.log("Yay "+ userName +"! your score is: "+score);
