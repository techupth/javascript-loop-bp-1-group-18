// Exercise #9: Classroom Scores

let studentsScore = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10,
};

let totalScore = 0;
let averageScore = 0;
 for (let key in studentsScore){
    totalScore += studentsScore[key]
    averageScore = totalScore/Object.keys(studentsScore).length
  }
console.log(averageScore)

let highestScoreName;
let highestScore = 0

for (let key in studentsScore){
   if (studentsScore[key] > highestScore){
   highestScore  = studentsScore[key]  
    highestScoreName = [key]
   }
}
console.log(`${highestScoreName} has the highest score, which is ${highestScore} points.;`)

let lowestScoreName ;
let lowestScore = 0 ;
for (let key in studentsScore){
    if (lowestScore === 0 || studentsScore[key] < lowestScore){
   lowestScore  = studentsScore[key]  
    lowestScoreName = [key]
    }
}
console.log(`${lowestScoreName} has the lowest score, which is ${lowestScore} points.;`)