const fs = require('fs');

const dataBuffer = fs.readFileSync('inputs/day1input.txt');
//  console.log(dataBuffer.toString());
const dataStr = dataBuffer.toString();
const dataArray =  dataStr.split("\n")
 //console.log(parseInt(dataArray));
 const totalFreq = dataArray.reduce( (a, b)=>{
     return a + b;
 },0)
  console.log(eval(totalFreq));