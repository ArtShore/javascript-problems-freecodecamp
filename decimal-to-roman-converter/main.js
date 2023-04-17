function convertToRoman(num) {
  const romanNums = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  }
  const decValues = Object.keys(romanNums);
  let romanized = "";

  function romanize(decimal) {

    for (let i = 12; i >= 0; i--) {

      let keyParsed = parseInt(decValues[i], 10);

      if (decimal / keyParsed >= 1) {

        let tmpNum = Math.floor(decimal / keyParsed);

        for (let j = 1; j <= tmpNum; j++) {

          romanized = romanized + romanNums[decValues[i]];
        }

        return romanize(decimal % keyParsed);
      }
    }

    return romanized;
  }
  return romanize(num);
}