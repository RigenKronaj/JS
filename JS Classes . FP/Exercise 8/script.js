const input = [1, -4, 12, 0, -3, 29, -150];

const filter = input.filter(el => el > 0);

const sum = filter.reduce((sum, i) => sum + i);
console.log(sum);