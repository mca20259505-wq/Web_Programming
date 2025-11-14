arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function filterOddNumbers(arr) {
    count = 0;
    for (val of arr) {
        if (val % 2 != 0) {
            count += 1;
        }
    }
    console.log("Total Odds in array :");
    console.log(count);
}
filterOddNumbers(arr)