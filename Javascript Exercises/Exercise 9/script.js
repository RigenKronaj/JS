function findMaximum(arr)
{
    let max = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] > max)
            max = arr[i];
    }

    return max;
}

function largestOfFour(arr)
{
    console.log("The largest number in array one is " + findMaximum(array[0]));
    console.log("The largest number in array two is " + findMaximum(array[1]));
    console.log("The largest number in array three is " + findMaximum(array[2]));
    console.log("The largest number in array four is " + findMaximum(array[3]));
}

let array = [[4, 7, 12, 75], [34, 74, 2, 7], [63, 8, 23, 3], [112, 63, 2, 40]];