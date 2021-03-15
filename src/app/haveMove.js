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