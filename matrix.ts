//% weight=51 color=#00c0b0 icon="\uf00a"
//% advanced=true
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

    //% blockId=empty
    //% block="empty matrix"
    export function empty(): Matrix<number> {
        return new Matrix([])
    }

    //% block="add row $data to $matrix"
    //% data.shadow="lists_create_with"
    //% matrix.shadow="empty"
    export function addRow(data: any[], matrix: Matrix<number>) {
        data = flattenArray(data);
        if (matrix.data.length) {
            data.length = matrix.data[0].length;
            data = data.map(item => item === undefined ? 0 : item);
        }
        matrix.data.push(data);
    }

    //% block="$matrix item at $row $col"
    //% matrix.shadow="empty"
    export function getItem(matrix: Matrix<number>, row: number, col: number): number {
        return matrix.data[row][col]
    }

    //% block="$matrix row at $row"
    //% matrix.shadow="empty"
    export function getRow(matrix: Matrix<number>, row: number): number[] {
        return matrix.data[row]
    }

    //% block="$matrix data"
    export function getData(matrix: Matrix<number>): number[][] {
        return matrix.data;
    }

    //% block="iterate over $matrix with "
    //% handlerStatement=1
    //% matrix.shadow="empty"
    export function forIn(matrix: Matrix<number>, callback: (item: number) => void) {
        for (const row of matrix.data) {
            for (const item of row) {
                callback(item);
            }
        }
    }

    //% block="iterate over $matrix rows with "
    //% handlerStatement=1
    //% matrix.shadow="empty"
    export function forInRows(matrix: Matrix<number>, callback: (item: number[]) => void) {
        for (const row of matrix.data) {
            callback(row);
        }
    }
}