function BubbleSort(arr) {
	let tmp = 0;
	for (let i=0; i < arr.length; i++) {
		for (let j=i+1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				tmp = arr[j]
                arr[j] = arr[i];
				arr[i] = tmp;
            }
        }
    }
	return arr;
}

const assert = require('assert');
assert.deepEqual(BubbleSort([5,1,1,2,0,0]), [0,0,1,1,2,5]);
assert.deepEqual(BubbleSort([5,2,3,1]), [1,2,3,5]);