/**
 * Write duplicate([10,20,30]) to return [10, 20, 30, 10, 20, 30]
 * program: duplicate
 * input: array of numbers
 * return: array of numbers
 * 
 * pesudocode:
 * function duplicate(array)
 * create an empty array, called duplicatedArray
 * COUNTED FOR LOOP that runs twice
 *  FOR EACH num in the input array
 *  add num in duplicatedArray with .push
 * return duplicatedArray
 */

function duplicate(arr) {
    let duplicatedArray = [];
    for (let i = 0; i < 2; i++) {
        for (let num of arr) {
            duplicatedArray.push(num);
        }
    }
    return duplicatedArray;
} 

export {duplicate};