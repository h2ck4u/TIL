function heapify(arr, length, i) {
    let largest = i;
    let left = i * 2 + 1;
    let right = i * 2 + 2;

    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, length, largest);
    }
    return arr;
}

function heapSort(arr) {
    let length = arr.length;
    let i = Math.floor(length / 2 - 1);
    let k = length - 1;

    while (i >= 0) {
        heapify(arr, length, i);
        i--;
    }
    while (k >= 0) {
        [arr[0], arr[k]] = [arr[k], arr[0]];
        heapify(arr, k, 0);
        k--;
    }
    return arr;
}

console.log(heapSort([1, 6, 7, 4, 5, 3, 2, 8])); // [1, 2, 3, 4, 5, 6, 7, 8]