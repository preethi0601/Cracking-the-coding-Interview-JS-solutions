// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1

function stringRotation(str1, str2) {
    if(str1.length != str2.length) return false

    return str1 + str1.includes(str2) ? true : false;
}


console.log(stringRotation("waterbottle", "erbottlewat"));


// Time complexity : O(N) - Includes uses atmost O(n) to check every element.
// Space complexity: O(1)