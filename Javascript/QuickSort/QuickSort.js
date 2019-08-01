function QuickSort(arr) {
	if (arr.length === 0) {
		return [];
	}

	const pivot = arr[0];
	const len = arr.length;
	const left = [];
	const right = [];

	for (let i = 1; i < len; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	return QuickSort(left).concat(pivot, QuickSort(right));
}



function qSort(arr) {
	if (arr.length === 0) {
		return [];
	}
	var left = [];
	var right = [];
	var pivot = arr[0];

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return qSort(left).concat(pivot, qSort(right));
}

const assert = require('assert');
assert.deepEqual(qSort([5, 3, 8, 4, 9, 1, 6, 2, 7]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);