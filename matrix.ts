//% weight=100 color=#0fbc11 icon="\uf00a"
namespace matrix {
    //% block
    export class Matrix<T> {
        data: T[][]
        
        constructor(data: T[][]) {
            this.data = data
        }
    }

    function flattenArray(array: any[]): any[] {
        let result: any[] = [];
        for (const item of array) {
            if (Array.isArray(item)) {
                result = result.concat(flattenArray(item));
            } else {
                result.push(item);
            }
        }

        return result;
    }

    //% block="empty matrix"
    export function empty(): Matrix<number> {
        return new Matrix([])
    }

    //% block="add row %data to %matrix"
    export function addRow(data: any[], matrix: Matrix<number>) {
        data = flattenArray(data);
        if (matrix.data.length) {
            data.length = matrix.data[0].length;
            data = data.map(item => item === undefined ? 0 : item);
        }
        matrix.data.push(data);
    }

    //% block="%matrix item at %row %col"
    export function getItem(matrix: Matrix<number>, row: number, col: number): number {
        return matrix.data[row][col]
    }

    //% block="%matrix row at %row"
    export function getColumn(matrix: Matrix<number>, row: number): number[] {
        return matrix.data[row]
    }
}