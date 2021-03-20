export default function sum(map, radius, vector, up = true) {
    for (let i = -radius + 1; i < radius; i++) {
        let column = map.filter(hex => hex[vector] === i)
        column = !up ? column.reverse() : column;
        for (let j = 0; j < column.length - 1; j++) {
            if (column[j].value !== 0 ? column[j + 1].value === column[j].value: false) {
                column[j].value = column[j + 1].value * 2
                column[j + 1].value = 0
            }
        }
    }
    return map
}