arr = [10, 20, 30, 40, 500, 60, 707, 80, 90, 100]

function findLargest(arr) {
    arr.sort((a, b) => b - a);
    console.log(arr[0])
    console.log(Math.max(...arr))
}
findLargest(arr);