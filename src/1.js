
const beforeMove = [
    [{ x: -1, y: 0, z: 1 }, { x: -1, y: 1, z: 0 }],
    [{ x: 0, y: -1, z: 1 }, { x: 0, y: 0, z: -0 }, { x: 0, y: 1, z: -1 }],
    [{ x: 1, y: -1, z: 0 }, { x: 1, y: 0, z: -1 }]
]

function mapToColumns(columns, radius) {
    let q = -radius + 1
    let newColumns = [];

    const createColumn = (columns, q,dim) => {
        let column = []
        for (let i = 0; i < columns.length; i++) {
            for (let j = 0; j < columns[i].length; j++)
                if (columns[i][j][dim] === q) {
                    if (columns[i][j])
                        column.push(columns[i][j])
                }
        }
        return column.sort((a, b) => {
            if (a.y > 0) {
                if (a.x < b.x) return 1
                else return -1
            }
            else return 1
        })

    }

    for (q; q < radius; q++) {
        newColumns
            .push(createColumn(columns, q,'x'))

    } 
    return newColumns
}

console.log(mapToColumns(beforeMove, 2))