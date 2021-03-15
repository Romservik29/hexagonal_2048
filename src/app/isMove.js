import { Hex } from "./mapGenerator"//dont work

export function isMoveX(columns, v = 'up') {
    let status = false
    let map = [...columns]
    columns.some(column => column.some(hex => map.some(mapColumn => mapColumn.some(cell => {
        if (cell.x === hex.x) {
            if (v === 'up' ? hex.y < cell.y : hex.y > cell.y)
                if (hex.value !== 0 ? hex.value === cell.value || cell.value === 0 : false) status = true
        }
    }))))
    return status
}

export function isMove(columns, vector, vertical = 'up') {
    let status = false
    let map = [...columns]
    columns.some(column => column.some(hex => map.some(mapColumn => mapColumn.some(cell => {
        if (cell[vector] === hex[vector]) {
            if (vertical === 'up' ? hex.x < cell.x : hex.x > cell.x)
                if (hex.value !== 0 ? hex.value === cell.value || cell.value === 0 : false) status = true
        }
    }))))
    return status
}