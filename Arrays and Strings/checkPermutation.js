// Given two strings, check if one is a permutation of the other


function checkPermutation(str1, str2) {
    if(str1.length != str2.length) return false;

    let hash = {}
    for(let i=0; i<str1.length;i++) {
        hash[str1[i]] = (hash[str1[i]] | 0) + 1
    }

    for(let i=0; i<str2.length;i++) {
        if(str2[i] in hash && hash[str2[i]] > 0) 
            hash[str2[i]]--;
        else return false;     
    }   
    return true;
}


console.log(checkPermutation('aba', 'aab'));

console.log(checkPermutation('aba', 'aaba'));

console.log(checkPermutation('aba', 'aa'));


// Time complexity : O(str1 + str2)
// Space complexity: O(N) - hash