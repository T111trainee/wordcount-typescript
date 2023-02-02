function countWordOccurrences(input) {
    var space = input.split(" ").length - 1;
    console.log("space:", space);
    var word;
    // initialize the result object
    var result = {};
    // create an array from the input
    var arr = input.split(' ');
    // loop through the array
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        word = arr_1[_i];
        // if the word is already in the result object, increment the count
        if (result[word]) {
            result[word]++;
        }
        else {
            // otherwise, add the word to the result object with a count of 1
            result[word] = 1;
        }
    }
    return result;
}
// try the function
console.log(countWordOccurrences('Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step, but Privet Drive had hardly changed at all.the sound of the frying pan being put on the stove.'));
