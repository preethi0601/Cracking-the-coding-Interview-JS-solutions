// a method to replace all spaces in a string with "%20"


function URLify(str) {
    return str.trim().replace(/ /g, "%20");
}



console.log(URLify("Mr John Smith "));//Mr%20John%20Smith
console.log(URLify("     Hello, Welcome to the show!"));



// Time complexity : O(N*M) - trim takes O(N) and replace takes O(N*M) - N being length and M being the replacing string
// Space complexity: O(1)