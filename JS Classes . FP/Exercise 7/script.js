function zip(arrayOne, arrayTwo) {
    const newArray = arrayOne.map((el, i) => [el, arrayTwo[i]]);
    return newArray;
}

console.log(zip([1, 2, 3], [4, 5, 6]));