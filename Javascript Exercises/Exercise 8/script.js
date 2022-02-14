function titleCase(str)
{
    let arr = str.split(" ");
    let arrTwo = [];
    let arrThree = [];

    //console.log(arr);

    for(let i = 0; i < arr.length; i++)
    {
        arrTwo[i] = arr[i].toLowerCase();
        //console.log(arrTwo[i]);

        let char = arr[i].charAt(0).toUpperCase();
        //console.log(char);

        let slice = arrTwo[i].slice(1);
        //console.log(slice);

        arrThree[i] = char + slice;
        //console.log(arrThree[i]);
    }

    let string = arrThree.join(" ");

    console.log(string);
}

let string = "HELLO woRLd";