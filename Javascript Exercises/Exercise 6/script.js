function changeDigit(input)
{
    for(let i = 0; i < input.length; i++)
    {
        if(!isNaN(input[i]))
        {
            input[i].replace("$");
            console.log(input[i]);
            break;
        }
    }
    console.log(input);
}

let input = "t3st123";