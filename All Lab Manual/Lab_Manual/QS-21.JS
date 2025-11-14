arr = [1, 2, 3, 4, 5]
sumOfArray(arr)

function sumOfArray(arr) {
    sum = 0
    for (val of arr) {
        sum += val
    }
    console.log("Sum of array elements :")
    console.log(sum)
}