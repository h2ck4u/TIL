/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
   let len = nums.length;
   let result = len;
   let degreeMap = new Map();
   let startMap = new Map();
   let endMap = new Map();
   let max = 1;
   for(let i=0; i<len; i++) {
      let currNum = nums[i];
      if (!startMap.has(currNum)) {
         startMap.set(currNum, i);
      }
      endMap.set(currNum, i);
      
      if (degreeMap.has(currNum)) {
         let currDegree = degreeMap.get(currNum);
         degreeMap.set(currNum, currDegree + 1);
         max = Math.max(max, currDegree + 1);
      } else {
         degreeMap.set(currNum, 1);
      }
   }
   
   Array.from(degreeMap.keys()).forEach(key => {
      if(degreeMap.get(key) == max) {
         result = Math.min(result, endMap.get(key) - startMap.get(key) + 1);
      }
   });
   return result;
};