const Y = [
    [{ x: 0, y: -1, z: 1, value: 2}, { x: 1, y: -1, z: 0, value: 0 }],
    [
        { x: -1, y: 0, z: 1, value: 2 },
        { x: 0, y: 0, z: 0, value: 0 },
        { x: 1, y: 0, z: -1, value: 0 }
    ],
    [{ x: 0, y: 1, z: -1, value: 0 }, { x: -1, y: 1, z: 0, value: 0 }]
]

const Z = [
    [{ x: 0, y: 1, z: -1 }, { x: 1, y: 0, z: -1 }],
    [
        { x: -1, y: 1, z: 0 },
        { x: 0, y: 0, z: -0 },
        { x: 1, y: -1, z: 0 }
    ],
    [{ x: -1, y: 0, z: 1 }, { x: 0, y: -1, z: 1 }]
]
const sum = (columns) => {
    for (let i = 0; i < columns.length; i++) {
        for (let j = 0; j < columns[i].length; j++) {
            console.log(columns[i][j])
            if (columns[i][j] !== undefined && columns[i][j + 1]) {
                if (columns[i][j].value === columns[i][j + 1].value) {
                    columns[i][j].value *= 2
                    columns[i][j + 1].value = 0
                }
            }
        }
    }
}

sum(Z);
