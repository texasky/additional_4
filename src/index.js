module.exports = function multiply(first, second) {
  let result = [];
  
  if(first === '0' || second === '0') {
    return '0';
  }
  
  first = first.split('').reverse();
  second = second.split('').reverse();
  
  for(let i = 0; first[i] >= 0; i++) {
    for(let j = 0; second[j] >= 0; j++) {
      if(!result[i + j]) {
         result[i + j] = 0;
      }
      result[i + j] += first[i] * second[j];
      }
    }
  
  for (let i = 0; result[i] >= 0; i++) {
    if (result[i] >= 10) {
      if (!result[i + 1]) {
          result[i + 1] = 0;
      }
      result[i + 1] += parseInt(result[i] / 10);
      result[i] %= 10;
    }
  }

  return result.reverse().join('');
};
