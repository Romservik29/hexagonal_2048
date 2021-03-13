function changeDim(columns, radius, dim) {
    let q = -radius + 1
    let newColumns = [];

    const createColumn = (columns, q, dim) => {
        let column = []
        for (let i = 0; i < columns.length; i++) {
            for (let j = 0; j < columns[i].length; j++) {
                if (columns[i][j][dim] === q) {
                    if (columns[i][j]) {
                        column.push(columns[i][j])
                    }
                }
            }

        }
        return column
    }

    for (q; q < radius; q++) {
        newColumns
            .push(createColumn(columns, q, dim))

    }
    for (let i = 0; i < newColumns.length; i++) {
        if (i + (-radius + 1) > 0) {
            if (dim === 'x') {
                newColumns[i].sort((a, b) => {
                    newColumns.forEach(column => column.sort((a, b) => {
                        if (a.y > b.y) return 1
                        else return -1
                    }
                    ))
                    if (a.z < b.z) return 1
                    else return -1
                })
            }
            else if (dim === 'z')
                newColumns[i].sort((a, b) => {
                    if (a.x > b.x) return 1
                    else return -1
                })
            else newColumns[i].sort((a, b) => {
                if (a.x > b.x) return 1
                else return -1
            })
        }

    }
    return newColumns
}

const Y = [
    [{ x: 0, y: -1, z: 1 }, { x: 1, y: -1, z: 0 }],
    [
        { x: -1, y: 0, z: 1 },
        { x: 0, y: 0, z: -0 },
        { x: 1, y: 0, z: -1 }
    ],
    [{ x: -1, y: 1, z: 0 },{ x: 0, y: 1, z: -1 }, ]
]

const X = [
    [{ x: -1, y: 0, z: 1 }, { x: -1, y: 1, z: 0 }],
    [
        { x: 0, y: -1, z: 1 },
        { x: 0, y: 0, z: -0 },
        { x: 0, y: 1, z: -1 }
    ],
    [{ x: 1, y: -1, z: 0 }, { x: 1, y: 0, z: -1 }]
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

test('X->Y', () => {
    expect(changeDim(X, 2, 'y')).toEqual(Y)
})
test('X->Z', () => {
    expect(changeDim(X, 2, 'z')).toEqual(Z)
})
test('Z->X', () => {
    expect(changeDim(Z, 2, 'x')).toEqual(X)
})
test('Y->X', () => {
    expect(changeDim(Y, 2, 'x')).toEqual(X)
})
