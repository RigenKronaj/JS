function rot13(string){
    const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const cipher = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];

    let newString = [];

    for(let i = 0; i < string.length; i++)
    {
        for(let j = 0; j < cipher.length; j++)
        {
            if(string.charAt(i) === abc[j])
                newString.push(cipher[j]);
        }
    }

    let cipherString = "";
    for(let i = 0; i < newString.length; i++)
        cipherString += newString[i];

    console.log("The deciphered string is " + string);
    console.log("The cipher is " + cipherString);
}