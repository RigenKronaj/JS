function findMaximum(arr)
{
    let max = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] > max)
            max = arr[i];
    }

    console.log(max);
}

let array = [5, 7, 24, 754, 23, 643, 84, 4, 853];