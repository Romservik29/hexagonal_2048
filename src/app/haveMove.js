import { Hex } from "./mapGenerator"//dont work

export function isMoveXUp(columns) {
    let status = false
    let map = [...columns]
    columns.some(column => column.some(hex => map.some(mapColumn => mapColumn.some(cell => {
        if (hex.x <= 0 ? cell.x === hex.x : false) {
            if (hex.y < cell.y)
                if (hex.value !== 0 ? hex.value === cell.value || cell.value === 0 : false) status = true
        }
        else if (hex.x > 0 ? cell.x === hex.x : false) {
            if (hex.y < cell.y) {
                if (hex.value !== 0 ? hex.value === cell.value || cell.value === 0 : false) status = true
            }
        }

    }))))
    return status
}

export function isMoveXDown(columns) {
    let status = false
    let map = [...columns]
    columns.some(column => column.some(hex => map.some(mapColumn => mapColumn.some(cell => {
        if (hex.x <= 0 ? cell.x === hex.x : false) {
            if (hex.y > cell.y)
                if (hex.value !== 0 ? hex.value === cell.value || cell.value === 0 : false) status = true
        }
        else if (hex.x > 0 ? cell.x === hex.x : false) {
            if (hex.y > cell.y) {
                if (hex.value !== 0 ? hex.value === cell.value || cell.value !== 0 : false) status = true
            }
        }

    }))))
    return status
}
/*
export function isMoveXDown(columns) {
    let status = false
    let map = [...columns]
    columns.some(column => column.some(hex => map.some(mapColumn => mapColumn.some(cell => {
        if (hex.x <= 0 ? cell.x === hex.x : false) {
            if (hex.y < cell.y)
                if (hex.value !== 0 ? hex.value === cell.value || cell.value === 0 : false) status = true
        }
        else if (hex.x > 0 ? cell.x === hex.x : false) {
            if (hex.y > cell.y) {
                if (hex.value !== 0 ? hex.value === cell.value || cell.value !== 0 : false) status = true
            }
        }

    }))))
    return status
}*/