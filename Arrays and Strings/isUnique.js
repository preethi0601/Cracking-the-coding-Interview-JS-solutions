// If a string has all unique characters

function isUnique(str) {
    let hash = {}
    for(let i = 0; i < str.length; i++) {
        if(str[i] in hash) return false;
        else hash[str[i]] = str[i]  
    }
    return true;
}

console.log(isUnique("hello"))
console.log(isUnique("welcome"))
console.log(isUnique("hey"))
console.log(isUnique(""))
console.log(isUnique("a"))


// Alternate solution: Use set to remove duplicates
// let set = new Set(str) ; return set.size === str.length


// Time complexity : O(N) - where N is length of input string
// Space complexity: O(N) - hash

