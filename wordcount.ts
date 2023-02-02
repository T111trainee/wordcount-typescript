function countWordOccurrences(input: string) {
  var space=input.split(" ").length-1
  console.log("space:",space)
  let word;
    // initialize the result object
  const result = {};
    // create an array from the input
  const arr = input.split(' ');
    // loop through the array
  for(word of arr) {
      
      // if the word is already in the result object, increment the count
    if(result[word]) {
        result[word]++;
    } else {
        // otherwise, add the word to the result object with a count of 1
        result[word] = 1;
    }
    }
     
    return result;
  }
 
  // try the function
console.log(countWordOccurrences('Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step, but Privet Drive had hardly changed at all.the sound of the frying pan being put on the stove.'));
