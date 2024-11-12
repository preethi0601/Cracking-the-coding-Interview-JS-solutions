/* There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
*/

function oneAway(str1, str2) {
    if(Math.abs(str1.length - str2.length) > 1) return false;

    let i = 0, j = 0, count = 0;
    while(i < str1.length && j < str2.length) {
        if(str1[i] != str2[j]) { // if char don't match
            if(count == 1) return false;
            if(str1.length > str2.length)i++;
            else if(str1.length > str2.length) j++;
            else {
                i++; j++;
            }
            count++;
        }
        else { // if char matches
            i++; j++;
        }
    }
    if(i<str1.length || j < str2.length) count++; //if extra letters are present in either of the input
    return count === 1;
}


console.log(oneAway("pale", "ple"));
console.log(oneAway("pales", "pale"));
console.log(oneAway("pale", "bale"));
console.log(oneAway("pale", "bake")); 


// Time complexity : O(str1 + str2)
// Space complexity: O(1)