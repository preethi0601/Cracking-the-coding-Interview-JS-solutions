/* Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. 

/* [ [1, 2, 3]             [ [7 4 1]
     [4, 5, 6]               [8 5 2]   
     [7, 8, 9] ]   becomes   [9 6 3] ]

*/

function rotateMatrix(matrix) {
    let result = [];
    let N = matrix.length
    for(let col = 0; col < N; col++) {
        let temp = [];
        for(let row = 0; row < N; row++) {
            let element = matrix[row][col];
            temp.unshift(element);
        }
        result.push(temp)
    }
    return result;
}



console.log(rotateMatrix([ [1, 2, 3],[4, 5, 6],[7, 8, 9] ]))


// Time complexity : O(N^2) 
// Space complexity: O(N)