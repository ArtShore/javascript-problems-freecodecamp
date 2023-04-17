const romanNums = {
  "I": 1,
  "IV": 4,
  "V": 5,
  "IX": 9,
  "X": 10,
  "XL": 40,
  "L": 50,
  "XC": 90,
  "C": 100,
  "CD": 400,
  "D": 500,
  "CM": 900,
  "M": 1000,

}
const romValues = Object.keys(romanNums);

function convertToArabic(num) {
  num = num.toUpperCase();
  let decNum = 0;
  let tmp = "";
  for (let i = 0; i < num.length; i++) {
    if (romanNums[num[i]] < romanNums[num[i + 1]] ) {
      tmp = num[i] + num[i + 1];
      decNum += romanNums[tmp];
      i++
    } else {
      tmp = num[i];
      decNum += romanNums[tmp];
    }
  }
  return (decNum);
}
  
console.log(convertToArabic("md"));