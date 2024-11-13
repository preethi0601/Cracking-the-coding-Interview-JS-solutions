//  Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column are set to 0. 



function zeroMatrix(matrix) {
    let N = matrix.length;
    let rowArr = [], colArr = [];
    for(let row = 0; row < N; row++) {
        for(let col = 0; col < N; col++) {
            if(matrix[row][col] == 0){
                rowArr.push(row); colArr.push(col);
            }
        }
    }

    for(let row = 0; row < N; row++) {
        for(let col = 0; col < N; col++) {
            if(rowArr.includes(row)) matrix[row][col] = 0;
            if(colArr.includes(col)) matrix[row][col] = 0;
        }
    }
    return matrix;
}


console.log(zeroMatrix([ [1, 0, 3],[4, 5, 6],[7, 8, 9] ])) 

// Time complexity : O(N^2)
// Space complexity: O(1)