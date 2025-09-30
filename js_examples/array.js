//array and accessing
let arr = ["html", "js",
    "css"
];
console.log(arr);
//accessing array
console.log("accessing array element");
console.log(arr[1]);

// accessing last elemet
let last = (arr[arr.length - 1]);
console.log("accessing last element");
console.log(last);
console.log("accessing last element second method ");
console.log(arr.at(-1));
// modify array element
console.log("array before modifying");
console.log(arr);
arr[1] = "bootstrap";
console.log("array after modifying");
console.log(arr);

//adding new elements

console.log("adding element by push(add at last)");
arr.push("node.js");
console.log(arr);
console.log("adding element by unshift(add at first)");
arr.unshift("web dev");
console.log(arr);


//removing element
console.log("removing element by pop(remove last element)");
arr.pop();
console.log(arr);
console.log("removing element by shift(remove first element)");
arr.shift();
console.log(arr);
console.log("removing element by splice(remove and add element)");
arr.splice(1, 3, "css", "js", "java");
console.log(arr);



//finding length of array
console.log("finding length of array ");
let len = arr.length;
console.log(len);


//iteratingarray element
console.log(arr);
console.log("using for loop");
for (let i of arr) {
    console.log(i);

}


//concatenate 2 array
console.log("concatenating ");
let a = ["hey", "i", "am"];
let b = ["kaifclash"];
console.log(a);
console.log(b);

console.log(a.concat(b));

//conversion of array

let c = ["1", "2", "3"];
console.log(c);
console.log("conversing array");
console.log(c.toString());

///type pf an array
console.log(typeof(c));