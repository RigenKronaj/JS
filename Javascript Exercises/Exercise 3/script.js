function guess(a)
{
    let rand = Math.floor(Math.random() * 10) + 1;

    if(rand === a)
        console.log("You guessed the right number!");
    else
        console.log("You guessed the wrong number!");
    
}