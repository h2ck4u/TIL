/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let tmpStr = '';
    let currIdx = 0;
    for (let i=0; i<s.length; i++) {
		currIdx = tmpStr.indexOf(s[i]);
		start = currIdx !== -1 ? start + currIdx + 1 : start;
		tmpStr = s.substring(start, i+1); 
    }
	return tmpStr.length;
};