/* Compress the string based on repeated characters
Example: string 'aabcccccaaa' would become 'a2blc5a3'
 If the "compressed" string would not become smaller than the original string, 
return the original string. */


function stringCompression(str) {
    let result = '';
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        count++;
        if(str[i] != str[i+1] || i === str.length - 1) {
            result += str[i];
            result += count;

            count = 0
        }
    }
    return result.length < str.length ? result : str;

}


console.log(stringCompression('aabcccccaaa'));
console.log(stringCompression('heeeeelllooo'));

// Time complexity : O(N) - length of str
// Space complexity: O(1)