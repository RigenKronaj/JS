const input='George Raymond Richard Martin';

const split = input.split(' ');
const initials = [];

for (let i = 0; i < split.length; i++) {
    initials.push(split[i].charAt(0));
}

console.log(initials.join(''));
