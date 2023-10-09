// Exercise #9: Classroom Scores
let totalScore = 0;
let averageScore = 0;

let studentsScore = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10,
};

for (let key in studentsScore) {
  totalScore += studentsScore[key];
  averageScore = totalScore / Object.keys(studentsScore).length;
}
console.log(`Average score is ${averageScore}`);

let highestScoreName;
let highestScore = 0;
 
for (let key in studentsScore) {
  if (studentsScore[key] > highestScore){
    highestScore = studentsScore[key];
  highestScoreName = [key];
  }
}

console.log(` ${highestScoreName} has the highest score, which is ${highestScore} `);

let lowestScoreName;
let lowestScore = 0;
 
for (let key in studentsScore) {
  if (lowestScore === 0 || studentsScore[key] < lowestScore){
    lowestScore = studentsScore[key];
  lowestScoreName = [key];
  }
}
console.log(` ${lowestScoreName} has the highest score, which is ${lowestScore} `);

