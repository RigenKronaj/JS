function translatePigLatin(string) {
    const vowels = ['a', 'e', 'o', 'i', 'u'];
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

    if(vowels.includes(string.charAt(0)))
        console.log(string + "way");
    
    if(consonants.includes(string.charAt(0)))
    {
        let i = 0;
        while(consonants.includes(string.charAt(i)))
            i++;

        let split = string.split(string.charAt(i));
        let slice = string.slice(i);
        console.log(slice + split[0] + "ay");
    }
}