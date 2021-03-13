import { changeDim, move, sumDown, sumUp } from "../app/move";
//have ideas for mearge
export const moveRightUp = (columns, radius) => {
    let newColumns = changeDim(columns, radius, 'z')
    newColumns = sumUp(newColumns, 0);
    newColumns = changeDim(columns, radius, 'x')
    return newColumns
}
export const moveLeftDown = (columns, radius) => {
    let newColumns = changeDim(columns, radius, 'z')
    newColumns = sumUp(newColumns, 1);
    newColumns = changeDim(columns, radius, 'x')
    return newColumns
}
export const moveLeftUp = (columns, radius) => {
    let newColumns = changeDim(columns, radius, 'y')
    newColumns = sumUp(newColumns, 1);
    newColumns = changeDim(columns, radius, 'x')
    return newColumns
}

test('sumUp', () => {
    const before = [
        [{ x: -1, y: 0, z: 1, value: 0 }, { x: -1, y: 1, z: 0, value: 2 }],
        [
            { x: 0, y: -1, z: 1, value: 2 },
            { x: 0, y: 0, z: 0, value: 2 },
            { x: 0, y: 1, z: -1, value: 2 }
        ],
        [{ x: 1, y: -1, z: 0, value: 0 }, { x: 1, y: 0, z: -1, value: 2 }]
    ]
    const after = [
        [{ x: -1, y: 0, z: 1, value: 2 }, { x: -1, y: 1, z: 0, value: 0 }],
        [
            { x: 0, y: -1, z: 1, value: 4 },
            { x: 0, y: 0, z: 0, value: 2 },
            { x: 0, y: 1, z: -1, value: 0 }
        ],
        [{ x: 1, y: -1, z: 0, value: 2 }, { x: 1, y: 0, z: -1, value: 0 }]
    ]
    expect(sumUp(before, 1)).toEqual(after)
})
test('sumDown', () => {
    const before = [
        [{ x: -1, y: 0, z: 1, value: 2 }, { x: -1, y: 1, z: 0, value: 0 }],
        [
            { x: 0, y: -1, z: 1, value: 2 },
            { x: 0, y: 0, z: 0, value: 2 },
            { x: 0, y: 1, z: -1, value: 2 }
        ],
        [{ x: 1, y: -1, z: 0, value: 2 }, { x: 1, y: 0, z: -1, value: 0 }]
    ]
    const after = [
        [{ x: -1, y: 0, z: 1, value: 0 }, { x: -1, y: 1, z: 0, value: 2 }],
        [
            { x: 0, y: -1, z: 1, value: 0 },
            { x: 0, y: 0, z: 0, value: 2 },
            { x: 0, y: 1, z: -1, value: 4 }
        ],
        [{ x: 1, y: -1, z: 0, value: 0 }, { x: 1, y: 0, z: -1, value: 2 }]
    ]
    expect(sumDown(before, 0)).toEqual(after)
})

test('sumYUp', () => {
    const before = [
        [{ x: 0, y: -1, z: 1, value: 2 }, { x: 1, y: -1, z: 0, value: 2 }],
        [
            { x: -1, y: 0, z: 1, value: 2 },
            { x: 0, y: 0, z: -0, value: 0 },
            { x: 1, y: 0, z: -1, value: 2 }
        ],
        [{ x: 0, y: 1, z: -1, value: 0 }, { x: -1, y: 1, z: 0, value: 2 }]
    ]
    const after = [
        [{ x: 0, y: -1, z: 1, value: 2 }, { x: 1, y: -1, z: 0, value: 2 }],
        [
            { x: -1, y: 0, z: 1, value: 2 },
            { x: 0, y: 0, z: -0, value: 2 },
            { x: 1, y: 0, z: -1, value: 0 }
        ],
        [{ x: 0, y: 1, z: -1, value: 2 }, { x: -1, y: 1, z: 0, value: 0 }]
    ]
expect(move(before,1)).toEqual(after)
})

test('sumRightUp', () => {
    const before = [
        [{ x: -1, y: 0, z: 1, value: 0 }, { x: -1, y: 1, z: 0, value: 0 }],
        [
            { x: 0, y: -1, z: 1, value: 2 },
            { x: 0, y: 0, z: 0, value: 2 },
            { x: 0, y: 1, z: -1, value: 2 }
        ],
        [{ x: 1, y: -1, z: 0, value: 0 }, { x: 1, y: 0, z: -1, value: 2 }]
    ]
    const after = [
        [{ x: -1, y: 0, z: 1, value: 0 }, { x: -1, y: 1, z: 0, value: 0 }],
        [
            { x: 0, y: -1, z: 1, value: 2 },
            { x: 0, y: 0, z: 0, value: 0 },
            { x: 0, y: 1, z: -1, value: 0 }
        ],
        [{ x: 1, y: -1, z: 0, value: 2 }, { x: 1, y: 0, z: -1, value: 4 }]
    ]
    expect(moveRightUp(before, 2)).toEqual(after)
})
test('sumLeftDown', () => {
    const before = [
        [{ x: -1, y: 0, z: 1, value: 2 }, { x: -1, y: 1, z: 0, value: 2 }],
        [
            { x: 0, y: -1, z: 1, value: 2 },
            { x: 0, y: 0, z: 0, value: 2 },
            { x: 0, y: 1, z: -1, value: 2 }
        ],
        [{ x: 1, y: -1, z: 0, value: 2 }, { x: 1, y: 0, z: -1, value: 2 }]
    ]
    const after = [
        [{ x: -1, y: 0, z: 1, value: 4 }, { x: -1, y: 1, z: 0, value: 4 }],
        [
            { x: 0, y: -1, z: 1, value: 0 },
            { x: 0, y: 0, z: 0, value: 2 },
            { x: 0, y: 1, z: -1, value: 4 }
        ],
        [{ x: 1, y: -1, z: 0, value: 0 }, { x: 1, y: 0, z: -1, value: 0 }]
    ]
    expect(moveLeftDown(before, 2)).toEqual(after)
})
test('sumLeftUp', () => {
    const before = [
        [{ x: -1, y: 0, z: 1, value: 2 }, { x: -1, y: 1, z: 0, value: 2 }],
        [
            { x: 0, y: -1, z: 1, value: 2 },
            { x: 0, y: 0, z: 0, value: 2 },
            { x: 0, y: 1, z: -1, value: 2 }
        ],
        [{ x: 1, y: -1, z: 0, value: 2 }, { x: 1, y: 0, z: -1, value: 2 }]
    ]
    const after = [
        [{ x: -1, y: 0, z: 1, value: 4 }, { x: -1, y: 1, z: 0, value: 0 }],
        [
            { x: 0, y: -1, z: 1, value: 4 },
            { x: 0, y: 0, z: 0, value: 2 },
            { x: 0, y: 1, z: -1, value: 4 }
        ],
        [{ x: 1, y: -1, z: 0, value: 0 }, { x: 1, y: 0, z: -1, value: 0 }]
    ]
    expect(moveLeftUp(before, 2)).toEqual(after)
})
