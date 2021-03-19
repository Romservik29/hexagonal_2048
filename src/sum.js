const map =
    [{ x: -1, y: 1, z: 0, value: 2 },
    { x: -1, y: 0, z: 1, value: 2 },
    { x: 0, y: 1, z: -1, value: 2 },
    { x: 0, y: 0, z: 0, value: 2 },
    { x: 0, y: -1, z: 1, value: 0 },
    { x: 1, y: 0, z: -1, value: 0 },
    { x: 1, y: -1, z: 0, value: 0 }
    ]

export default function sum(map, radius, vector, up = true) {
    for (let i = -radius + 1; i < radius; i++) {
        let column = map.filter(hex => hex[vector] === i)
        !up ? column.reverse() : false;
        for (let j = 0; j < column.length - 1; j++) {
            if (column[j].value !== 0 ? column[j + 1].value === column[j].value: false) {
                column[j].value = column[j + 1].value * 2
                column[j + 1].value = 0
                j = -1
            }
        }
    }
    return map
}