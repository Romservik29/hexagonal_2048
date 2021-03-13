export const move = (columns, switcher) => {
    if (switcher === 1) {
        for (let i = 0; i < columns.length; i++) {
            for (let j = columns[i].length - 1; j > 0; j--) {
                if (columns[i][j] !== undefined && columns[i][j - 1] !== undefined) {
                    if (columns[i][j - 1].value === 0) {
                        columns[i][j - 1].value = columns[i][j].value
                        columns[i][j].value = 0
                        if (columns[i][j].value !== columns[i][j - 1].value) { j = columns[i].length }
                    }
                }
            }
        }
    }
    else {
        for (let i = 0; i < columns.length; i++) {//down
            for (let j = 0; j < columns[i].length; j++) {
                if (columns[i][j + 1] !== undefined) {
                    if (columns[i][j + 1].value === 0) {
                        columns[i][j + 1].value = columns[i][j].value
                        columns[i][j].value = 0
                        if (columns[i][j].value !== columns[i][j + 1].value) { j = 0 }
                    }
                }
            }
        }
    }
    return columns
}

test('moveUp', () => {
    const before = [
        [{ x: -1, y: 0, z: 1, value: 0 }, { x: -1, y: 1, z: 0, value: 2 }],
        [
            { x: 0, y: -1, z: 1, value: 0 },
            { x: 0, y: 0, z: 0, value: 0 },
            { x: 0, y: 1, z: -1, value: 2 }
        ],
        [{ x: 1, y: -1, z: 0, value: 0 }, { x: 1, y: 0, z: -1, value: 2 }]
    ]
    const after = [
        [{ x: -1, y: 0, z: 1, value: 2 }, { x: -1, y: 1, z: 0, value: 0 }],
        [
            { x: 0, y: -1, z: 1, value: 2 },
            { x: 0, y: 0, z: 0, value: 0 },
            { x: 0, y: 1, z: -1, value: 0 }
        ],
        [{ x: 1, y: -1, z: 0, value: 2 }, { x: 1, y: 0, z: -1, value: 0 }]
    ]
    expect(move(before, 1)).toEqual(after)
})
test('moveDown', () => {
    const after = [
        [{ x: -1, y: 0, z: 1, value: 0 }, { x: -1, y: 1, z: 0, value: 2 }],
        [
            { x: 0, y: -1, z: 1, value: 0 },
            { x: 0, y: 0, z: 0, value: 0 },
            { x: 0, y: 1, z: -1, value: 2 }
        ],
        [{ x: 1, y: -1, z: 0, value: 0 }, { x: 1, y: 0, z: -1, value: 2 }]
    ]
    const before = [
        [{ x: -1, y: 0, z: 1, value: 2 }, { x: -1, y: 1, z: 0, value: 0 }],
        [
            { x: 0, y: -1, z: 1, value: 2 },
            { x: 0, y: 0, z: 0, value: 0 },
            { x: 0, y: 1, z: -1, value: 0 }
        ],
        [{ x: 1, y: -1, z: 0, value: 2 }, { x: 1, y: 0, z: -1, value: 0 }]
    ]
    expect(move(before, 0)).toEqual(after)
})
test('moveZUp', () => {
    const before = [
    [{ x: 0, y: 1, z: -1, value: 2 }, { x: 1, y: 0, z: -1, value: 2  }],
    [
        { x: -1, y: 1, z: 0, value: 2  },
        { x: 0, y: 0, z: 0, value: 0  },
        { x: 1, y: -1, z: 0, value: 0  }
    ],
    [{ x: -1, y: 0, z: 1, value: 2  }, { x: 0, y: -1, z: 1, value: 0  }]
]
    const after = [
    [{ x: 0, y: 1, z: -1, value: 2 }, { x: 1, y: 0, z: -1, value: 2 }],
    [
        { x: -1, y: 1, z: 0, value: 0 },
        { x: 0, y: 0, z: 0, value: 0 },
        { x: 1, y: -1, z: 0, value: 2 }
    ],
    [{ x: -1, y: 0, z: 1, value: 0 }, { x: 0, y: -1, z: 1, value: 2 }]
]
    expect(move(before, 0)).toEqual(after)
})
test('moveZDown', () => {
        const after = [
    [{ x: 0, y: 1, z: -1, value: 2 }, { x: 1, y: 0, z: -1, value: 2  }],
    [
        { x: -1, y: 1, z: 0, value: 2  },
        { x: 0, y: 0, z: 0, value: 0  },
        { x: 1, y: -1, z: 0, value: 0  }
    ],
    [{ x: -1, y: 0, z: 1, value: 2  }, { x: 0, y: -1, z: 1, value: 0  }]
]
    const before = [
    [{ x: 0, y: 1, z: -1, value: 2 }, { x: 1, y: 0, z: -1, value: 2 }],
    [
        { x: -1, y: 1, z: 0, value: 0 },
        { x: 0, y: 0, z: 0, value: 0 },
        { x: 1, y: -1, z: 0, value: 2 }
    ],
    [{ x: -1, y: 0, z: 1, value: 0 }, { x: 0, y: -1, z: 1, value: 2 }]
]
    expect(move(before, 1)).toEqual(after)
})
test('moveYUp', () => {
    const after = [
    [{ x: 0, y: -1, z: 1, value: 2 }, { x: 1, y: -1, z: 0, value: 0 }],
    [
        { x: -1, y: 0, z: 1, value: 2 },
        { x: 0, y: 0, z: -0, value: 0 },
        { x: 1, y: 0, z: -1, value: 0 }
    ],
    [{ x: 0, y: 1, z: -1, value: 2 }, { x: -1, y: 1, z: 0, value: 0 }]
]
    const before = [
    [{ x: 0, y: -1, z: 1, value: 0 }, { x: 1, y: -1, z: 0, value: 2 }],
    [
        { x: -1, y: 0, z: 1, value: 0 },
        { x: 0, y: 0, z: -0, value: 0 },
        { x: 1, y: 0, z: -1, value: 2 }
    ],
    [{ x: 0, y: 1, z: -1, value: 0 }, { x: -1, y: 1, z: 0, value: 2},]
]
    expect(move(before, 1)).toEqual(after)
})
test('moveYDown', () => {
    const before = [
    [{ x: 0, y: -1, z: 1, value: 0 }, { x: 1, y: -1, z: 0, value: 2 }],
    [
        { x: -1, y: 0, z: 1, value: 0 },
        { x: 0, y: 0, z: -0, value: 0 },
        { x: 1, y: 0, z: -1, value: 2 }
    ],
    [{ x: 0, y: 1, z: -1, value: 0 }, { x: -1, y: 1, z: 0, value: 2 }]
]
    const after = [
    [{ x: 0, y: -1, z: 1, value: 0 }, { x: 1, y: -1, z: 0, value: 2 }],
    [
        { x: -1, y: 0, z: 1, value: 0 },
        { x: 0, y: 0, z: -0, value: 0 },
        { x: 1, y: 0, z: -1, value: 2 }
    ],
    [{ x: 0, y: 1, z: -1, value: 0 }, { x: -1, y: 1, z: 0, value: 2}]
]
    expect(move(before, 0)).toEqual(after)
})
