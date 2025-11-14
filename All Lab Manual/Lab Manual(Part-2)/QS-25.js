arr = [1, 2, 3, 4, 5]


function average(arr) {
    sum = 0;
    for (val of arr) {
        sum += val;
    }
    len = arr.length;

    avg = sum / len;

    console.log("Average of array :")
    console.log(avg)
}
average(arr);