const arrayOfMultiples = (num, length) => {
  
  verifyArg(length);

  let newArr = new Array;
  let numCount = 0;
  
  for(let i = 0; i < length; i ++) {
    numCount = numCount + num;
    newArr.push(numCount);
  }

  return newArr;
}

const verifyArg = (length) => {
  if(length === 0)
    return [];
}

arrayOfMultiples(17, 6);



/*
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102] 
*/