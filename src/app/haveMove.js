import { Hex } from "./mapGenerator"//dont work

export function isMoveXUp(columns) {
    for (let i = 0; i < columns.length; i++) {
        for (let j = 0; j < columns[i].length - 1; j++) {
            if (columns[i][j].value === columns[i][j + 1].value && columns[i][j].value !== 0) return true
            if (columns[i][j].value !== 0 && columns[i][j].value + columns[i][j + 1] !== 0) return true
        }
    }
    if (columns[1][1].value === 0 && columns[1][2].value !== 0) return true
    return false
}

export function isMoveXDown(columns) {
    for (let i = 0; i < columns.length; i++) {
        for (let j = 1; j < columns[i].length; j++) {
            if (columns[i][j].value === columns[i][j - 1].value && columns[i][j].value !== 0) return true
            if (columns[i][j].value === 0 && columns[i][j - 1] !== 0) return true
        }
    }
    if (columns[1][1].value === 0 && columns[1][0].value !== 0) return true
    return false
}