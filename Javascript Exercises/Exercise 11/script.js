function myReplace(string, before, after) {
    if(before.charAt(0) === before.charAt(0).toUpperCase()) 
    {
        let afterSlice = after.slice(1);
        let newAfter = after.charAt(0).toUpperCase() + afterSlice;
        let split = string.split(before);
        let splitTwo = split[1].split(" ");
        let newString = split[0] + newAfter + " " + splitTwo[1];
        return newString;
    }
    else
    {
        let split = string.split(before);
        let splitTwo = split[1].split(" ");
        let newString = split[0] + after + " " + splitTwo[1];
        return newString;
    }
}

let string = "One two Three four";
let before = "Three";
let after = "four";