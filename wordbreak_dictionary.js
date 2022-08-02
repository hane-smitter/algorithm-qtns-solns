function ArrayChallenge(strArr) {

  // code goes here  
  let strToExtractWords = strArr[0];
  let dict = strArr[1];
  let dictArr = dict.split(",");
  let firstMatch;
  let otherMatch;
  let results = [];


  dictArr = dictArr.sort((a, b) => b.length - a.length)
  // console.log(dictArr);
  for (let i = 0; i < dictArr.length; i++) {
    if (strToExtractWords.includes(dictArr[i])) {
      firstMatch = dictArr[i];
      // console.log(firstMatch)
      break
    }
  }
  if (firstMatch) {
    otherMatch = strToExtractWords.replace(firstMatch, "");
    // console.log(otherMatch)
    results.push(firstMatch, otherMatch)
  }

  // first word first
  if (strToExtractWords.indexOf(firstMatch) !== 0) {
    // delete array
    results.splice(0);
    // reorder
    results.splice(0,0,otherMatch,firstMatch);
  }
  return results.join(",");

}

// keep this function call here 
console.log(ArrayChallenge(readline()));
