/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let position = 0;
    for (let i = 0; i < s.length; i++) {
        let index = s.indexOf(s.charAt(i), position);
        if (index < i) {
            position = index + 1;
        }
        max = Math.max(max, i - position + 1);
    }
    return max;
};