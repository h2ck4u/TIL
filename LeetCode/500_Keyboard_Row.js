/**
 * Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
 * Example:
 * Input: ["Hello", "Alaska", "Dad", "Peace"]
 * Output: ["Alaska", "Dad"]
 *  Note:
 * You may use one character in the keyboard more than once.
 * You may assume the input string will only contain letters of alphabet.
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

    const findRow = str => {
        if (row3.indexOf(str) > -1) {
            return row3;
        } else if (row2.indexOf(str) > -1) {
            return row2;
        } else {
            return row1;
        }
    }

    return words.filter(word => {
        let lowerCase = word.toLowerCase();
        let row = findRow(lowerCase[0]);
        return lowerCase.split('').every(str => {
            return row.indexOf(str) > -1;
        });
    });

};

const assert = require('assert');
assert.deepStrictEqual(findWords(["Hello", "Alaska", "Dad", "Peace"]), ["Alaska", "Dad"]);