// Given a string, check if it is a permutation of a palindrom


function palindromePermutation(a) {
    let str = a.toLowerCase().split(' ').join('');
    let hash = {};
    let count = 0;
    for(let i = 0; i<str.length; i++) {
        hash[str[i]] = (hash[str[i]] | 0) + 1;
    }
    console.log(hash)
    for(let i = 0; i < str.length; i++) {
        if(hash[str[i]] % 2 != 0) count++;
        if(count > 1) return false;
        
    }
    return true;
}

console.log(palindromePermutation("Tact coa"))
console.log(palindromePermutation("aa$ b$Bc"))


// Time complexity : O(N) - length of input 
// [In JS, the split and join also take O(length of str)worst case each, so complexity would increase if this is also accounted for]
// Space complexity: O(N) - hash