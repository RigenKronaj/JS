function findLongestWordLength(str)
{
    let split = str.split(" ");
    let longest = 0;
    let word = null;

    for(let i = 0; i < split.length; i++)
    {
        if(split[i].length > longest)
        {
            longest = split[i].length;
            word = split[i];
        } 
    }

    return word.length;
}

let string = "the hungry rabbit jumps";