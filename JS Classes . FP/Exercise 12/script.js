function flatten(arr) {
    let newArray = arr[0].concat(arr[1]);
    newArray = newArray.concat(arr[2]);

    return newArray;
}

let arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays));

/*function test(arr) {
    let i = 0;
    let newArray;

    do {
        newArray = arr[i].concat(arr[i+1]);
        i++;
    } while (i < arr.length);

    return newArray;
}*/