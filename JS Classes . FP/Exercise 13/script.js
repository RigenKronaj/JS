const input = 'Every developer likes to mix kubernetes and javascript';

function shorten(input) {
    let arr = input.split(' ');
    let count = 0;
    let arrTwo = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length < 4)
            continue;
        else
        {
            while(!arr[i].charAt(0) && !(arr[i].charAt(arr[i].length - 1))){
                count++;
            }
            arrTwo[i] = arr[i].charAt[0] + count + arr[i].charAt(arr[i].length - 1);
        }
    }

    return arrTwo;
}

console.log(shorten(input));