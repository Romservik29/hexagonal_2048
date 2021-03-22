export default function move(map, radius, vector, up = true) {
    for (let i = -radius + 1; i < radius; i++) {
        let column = map.filter(hex => hex[vector] === i)
        column = !up ? column.reverse() : column;
        for (let j = 0; j < column.length - 1; j++) {
            if (column[j].value === 0 ? column[j + 1].value !== 0 : false) {
                column[j].value = column[j + 1].value
                column[j + 1].value = 0
                j = -1
            }
        }
    }
    return map
}