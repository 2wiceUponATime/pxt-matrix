let myMatrix = matrix.empty()
matrix.addRow([1, 2, 3], myMatrix)
matrix.addRow([4, 5, 6], myMatrix)
matrix.addRow([7, 8, 9], myMatrix)
matrix.forInRows(myMatrix, function (item) {
    console.log(item)
})
