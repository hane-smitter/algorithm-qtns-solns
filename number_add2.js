Array.prototype.max = function () {
    return Math.max.apply(null, this)
  }
  
  function ArrayChallenge(arr) {
  
    // code goes here  
    let largestNumIdx = arr.indexOf(arr.max());
    let largestVal = arr.splice(largestNumIdx, 1);
    let sum;
    let times = 0;
    while (times < arr.length - 1) {
      sum = arr[0];
      let index = 1;
      while (index < arr.length) {
        for (let j = index; j < arr.length; j++) {
          sum += arr[j]
        }
        if (sum == largestVal) {
          return true.toString();
        }
  
        index += 1;
        sum = arr[0];
      }
      // swapping
      let tmp = arr[times + 1];
      arr[times + 1] = arr[0];
      arr[0] = tmp;
      times += 1;
    }
    return false.toString();
  
  }
  
  // keep this function call here 
  console.log(ArrayChallenge([3, 5, -1, 8, 12]));