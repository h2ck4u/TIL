var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function binarySearch(arr, data) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < data) {
            left = mid + 1;
        } else if (arr[mid] > data) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
}

console.log(binarySearch(arr, 4));