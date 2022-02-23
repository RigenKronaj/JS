function stringConcat(arr) {
    const sum = arr.reduce((sum, i) => sum + i);
    return sum;
}

console.log(stringConcat([1, 2, 3, 4, 5]));