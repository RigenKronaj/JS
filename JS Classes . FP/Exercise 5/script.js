function squareList(array) {
    const filter = array.filter(el => (el > 0) && Number.isInteger(el));
    const newArray = filter.map(el => el * el);
    return newArray;
}

const array = [-3, 4.8, 5, 3, -3.2];

console.log(squareList(array));