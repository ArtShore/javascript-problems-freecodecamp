function smallestCommons(arr) {
  //pre-defining variables
  const rangeArr = [];
  let max, min, gcd, lcm;
  
  // This if statement defines the min and max in the range
  if (arr[0] > arr[1]) {
    max = arr[0];
    min = arr[1];
  } else {
    max = arr[1];
    min = arr[0];
  }
  //This function calculates the greatest common divisor
  function greatestCommonDivisor(big, small) {
    
    let remainder = (big % small);
    if (remainder === 0) {
      gcd = small;
      return gcd;
    } else {
      return greatestCommonDivisor(small, remainder);
    }
  }
  // This loop pushes the number range into an array
  for (let i = min; i <= max; i++) {
    rangeArr.push(i);
  }
  //and now we calculate the smallest common
  if (rangeArr.length === 1) {
    lcm = (1 * (rangeArr[0] * rangeArr[1])) / greatestCommonDivisor(rangeArr[0], rangeArr[1]);
  } else {
    lcm = (1 * (rangeArr[0] * rangeArr[1])) / greatestCommonDivisor(rangeArr[0], rangeArr[1]);
    for (let j = 2; j < rangeArr.length; j++) {
      lcm = (1 * (lcm * rangeArr[j])) / greatestCommonDivisor(lcm, rangeArr[j]);
  }
  }
  return lcm;
}

console.log(smallestCommons([1,5]));