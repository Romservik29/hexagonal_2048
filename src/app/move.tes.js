/*import { moveUp, moveDown, steps, changeDim } from './move'
test('moveUp', () => {
    const beforeMove = [
        [{ x: -1, y: 0, z: 1, value: 0 }, { x: -1, y: 1, z: 0, value: 2 }],
        [{ x: 0, y: -1, z: 1, value: 0 }, { x: 0, y: 0, z: 0, value: 2 }, { x: 0, y: 1, z: -1, value: 0 }],
        [{ x: 1, y: -1, z: 0, value: 0 }, { x: 1, y: 0, z: -1, value: 2 }]
    ]
    const afterMove = [
        [{ x: -1, y: 0, z: 1, value: 2 }, { x: -1, y: 1, z: 0, value: 0 }],
        [{ x: 0, y: -1, z: 1, value: 2 }, { x: 0, y: 0, z: 0, value: 0 }, { x: 0, y: 1, z: -1, value: 0 }],
        [{ x: 1, y: -1, z: 0, value: 2 }, { x: 1, y: 0, z: -1, value: 0 }]
    ]
    expect(moveUp(beforeMove)).toEqual(afterMove);
})
test('moveDown', () => {
    const beforeMove = [
        [{ x: -1, y: 0, z: 1, value: 2 }, { x: -1, y: 1, z: 0, value: 0 }],
        [{ x: 0, y: -1, z: 1, value: 2 }, { x: 0, y: 0, z: 0, value: 0 }, { x: 0, y: 1, z: -1, value: 0 }],
        [{ x: 1, y: -1, z: 0, value: 2 }, { x: 1, y: 0, z: -1, value: 0 }]
    ]
    const afterMove = [
        [{ x: -1, y: 0, z: 1, value: 0 }, { x: -1, y: 1, z: 0, value: 2 }],
        [{ x: 0, y: -1, z: 1, value: 0 }, { x: 0, y: 0, z: 0, value: 0 }, { x: 0, y: 1, z: -1, value: 2 }],
        [{ x: 1, y: -1, z: 0, value: 0 }, { x: 1, y: 0, z: -1, value: 2 }]
    ]

    expect(moveDown(beforeMove)).toEqual(afterMove);
})

test("changeDimension", () => {
    const before = [
        [{ x: -1, y: 0, z: 1 }, { x: -1, y: 1, z: 0 }],
        [
            { x: 0, y: -1, z: 1 },
            { x: 0, y: 0, z: -0 },
            { x: 0, y: 1, z: -1 }
        ],
        [{ x: 1, y: -1, z: 0 }, { x: 1, y: 0, z: -1 }]
    ]
    const after = [
        [{ x: 0, y: 1, z: -1 }, { x: 1, y: 0, z: -1 }],
        [
            { x: -1, y: 1, z: 0 },
            { x: 0, y: 0, z: -0 },
            { x: 1, y: -1, z: 0 }
        ],
        [{ x: -1, y: 0, z: 1 }, { x: 0, y: -1, z: 1 }]
    ]
    expect(changeDim(before, 2, 'z')).toEqual(after)
})

test('sumUp', () => {
    const beforeMove = [
        [{ "x": -3, "y": 0, "z": 3, "value": 0 }, { "x": -3, "y": 1, "z": 2, "value": 0 }, { "x": -3, "y": 2, "z": 1, "value": 0 }, { "x": -3, "y": 3, "z": 0, "value": 0 }],
        [{ "x": -2, "y": -1, "z": 3, "value": 0 }, { "x": -2, "y": 0, "z": 2, "value": 0 }, { "x": -2, "y": 1, "z": 1, "value": 0 }, { "x": -2, "y": 2, "z": 0, "value": 0 }, { "x": -2, "y": 3, "z": -1, "value": 0 }],
        [{ "x": -1, "y": -2, "z": 3, "value": 0 }, { "x": -1, "y": -1, "z": 2, "value": 0 }, { "x": -1, "y": 0, "z": 1, "value": 0 }, { "x": -1, "y": 1, "z": 0, "value": 0 }, { "x": -1, "y": 2, "z": -1, "value": 0 }, { "x": -1, "y": 3, "z": -2, "value": 0 }],
        [
            {
                "x": 0,
                "y": -3,
                "z": 3,
                "value": 0
            },
            {
                "x": 0,
                "y": -2,
                "z": 2,
                "value": 2
            },
            {
                "x": 0,
                "y": -1,
                "z": 1,
                "value": 2
            },
            {
                "x": 0,
                "y": 0,
                "z": 0,
                "value": 2
            },
            {
                "x": 0,
                "y": 1,
                "z": -1,
                "value": 2
            },
            {
                "x": 0,
                "y": 2,
                "z": -2,
                "value": 2
            },
            {
                "x": 0,
                "y": 3,
                "z": -3,
                "value": 0
            }
        ],
        [{ "x": 1, "y": -3, "z": 2, "value": 0 }, { "x": 1, "y": -2, "z": 1, "value": 0 }, { "x": 1, "y": -1, "z": 0, "value": 0 }, { "x": 1, "y": 0, "z": -1, "value": 0 }, { "x": 1, "y": 1, "z": -2, "value": 0 }, { "x": 1, "y": 2, "z": -3, "value": 0 }],
        [{ "x": 2, "y": -3, "z": 1, "value": 0 }, { "x": 2, "y": -2, "z": 0, "value": 0 }, { "x": 2, "y": -1, "z": -1, "value": 0 }, { "x": 2, "y": 0, "z": -2, "value": 0 }, { "x": 2, "y": 1, "z": -3, "value": 0 }],
        [{ "x": 3, "y": -3, "z": 0, "value": 0 }, { "x": 3, "y": -2, "z": -1, "value": 0 }, { "x": 3, "y": -1, "z": -2, "value": 0 }, { "x": 3, "y": 0, "z": -3, "value": 0 }]
    ]
    const afterMove = [
        [{ "x": -3, "y": 0, "z": 3, "value": 0 }, { "x": -3, "y": 1, "z": 2, "value": 0 }, { "x": -3, "y": 2, "z": 1, "value": 0 }, { "x": -3, "y": 3, "z": 0, "value": 0 }],
        [{ "x": -2, "y": -1, "z": 3, "value": 0 }, { "x": -2, "y": 0, "z": 2, "value": 0 }, { "x": -2, "y": 1, "z": 1, "value": 0 }, { "x": -2, "y": 2, "z": 0, "value": 0 }, { "x": -2, "y": 3, "z": -1, "value": 0 }],
        [{ "x": -1, "y": -2, "z": 3, "value": 0 }, { "x": -1, "y": -1, "z": 2, "value": 0 }, { "x": -1, "y": 0, "z": 1, "value": 0 }, { "x": -1, "y": 1, "z": 0, "value": 0 }, { "x": -1, "y": 2, "z": -1, "value": 0 }, { "x": -1, "y": 3, "z": -2, "value": 0 }],
        [
            {
                "x": 0, "y": -3, "z": 3, "value": 0
            },
            {
                "x": 0, "y": -2, "z": 2, "value": 0
            },
            {
                "x": 0, "y": -1, "z": 1, "value": 0
            },
            {
                "x": 0, "y": 0, "z": 0, "value": 0
            },
            {
                "x": 0, "y": 1, "z": -1, "value": 2
            },
            {
                "x": 0, "y": 2, "z": -2, "value": 4
            },
            {
                "x": 0, "y": 3, "z": -3, "value": 4
            }
        ],
        [{ "x": 1, "y": -3, "z": 2, "value": 0 }, { "x": 1, "y": -2, "z": 1, "value": 0 }, { "x": 1, "y": -1, "z": 0, "value": 0 }, { "x": 1, "y": 0, "z": -1, "value": 0 }, { "x": 1, "y": 1, "z": -2, "value": 0 }, { "x": 1, "y": 2, "z": -3, "value": 0 }],
        [{ "x": 2, "y": -3, "z": 1, "value": 0 }, { "x": 2, "y": -2, "z": 0, "value": 0 }, { "x": 2, "y": -1, "z": -1, "value": 0 }, { "x": 2, "y": 0, "z": -2, "value": 0 }, { "x": 2, "y": 1, "z": -3, "value": 0 }],
        [{ "x": 3, "y": -3, "z": 0, "value": 0 }, { "x": 3, "y": -2, "z": -1, "value": 0 }, { "x": 3, "y": -1, "z": -2, "value": 0 }, { "x": 3, "y": 0, "z": -3, "value": 0 }]
    ]
    expect(steps(beforeMove, 'down')).toEqual(afterMove);
})

test('sumDown', () => {
    const beforeMove = [
        [{ "x": -3, "y": 0, "z": 3, "value": 0 }, { "x": -3, "y": 1, "z": 2, "value": 0 }, { "x": -3, "y": 2, "z": 1, "value": 0 }, { "x": -3, "y": 3, "z": 0, "value": 0 }],
        [{ "x": -2, "y": -1, "z": 3, "value": 0 }, { "x": -2, "y": 0, "z": 2, "value": 0 }, { "x": -2, "y": 1, "z": 1, "value": 0 }, { "x": -2, "y": 2, "z": 0, "value": 0 }, { "x": -2, "y": 3, "z": -1, "value": 0 }],
        [{ "x": -1, "y": -2, "z": 3, "value": 0 }, { "x": -1, "y": -1, "z": 2, "value": 0 }, { "x": -1, "y": 0, "z": 1, "value": 0 }, { "x": -1, "y": 1, "z": 0, "value": 0 }, { "x": -1, "y": 2, "z": -1, "value": 0 }, { "x": -1, "y": 3, "z": -2, "value": 0 }],
        [
            {
                "x": 0,
                "y": -3,
                "z": 3,
                "value": 0
            },
            {
                "x": 0,
                "y": -2,
                "z": 2,
                "value": 2
            },
            {
                "x": 0,
                "y": -1,
                "z": 1,
                "value": 2
            },
            {
                "x": 0,
                "y": 0,
                "z": 0,
                "value": 2
            },
            {
                "x": 0,
                "y": 1,
                "z": -1,
                "value": 2
            },
            {
                "x": 0,
                "y": 2,
                "z": -2,
                "value": 0
            },
            {
                "x": 0,
                "y": 3,
                "z": -3,
                "value": 0
            }
        ],
        [{ "x": 1, "y": -3, "z": 2, "value": 0 }, { "x": 1, "y": -2, "z": 1, "value": 0 }, { "x": 1, "y": -1, "z": 0, "value": 0 }, { "x": 1, "y": 0, "z": -1, "value": 0 }, { "x": 1, "y": 1, "z": -2, "value": 0 }, { "x": 1, "y": 2, "z": -3, "value": 0 }],
        [{ "x": 2, "y": -3, "z": 1, "value": 0 }, { "x": 2, "y": -2, "z": 0, "value": 0 }, { "x": 2, "y": -1, "z": -1, "value": 0 }, { "x": 2, "y": 0, "z": -2, "value": 0 }, { "x": 2, "y": 1, "z": -3, "value": 0 }],
        [{ "x": 3, "y": -3, "z": 0, "value": 0 }, { "x": 3, "y": -2, "z": -1, "value": 0 }, { "x": 3, "y": -1, "z": -2, "value": 0 }, { "x": 3, "y": 0, "z": -3, "value": 0 }]
    ]
    const afterMove = [
        [{ "x": -3, "y": 0, "z": 3, "value": 0 }, { "x": -3, "y": 1, "z": 2, "value": 0 }, { "x": -3, "y": 2, "z": 1, "value": 0 }, { "x": -3, "y": 3, "z": 0, "value": 0 }],
        [{ "x": -2, "y": -1, "z": 3, "value": 0 }, { "x": -2, "y": 0, "z": 2, "value": 0 }, { "x": -2, "y": 1, "z": 1, "value": 0 }, { "x": -2, "y": 2, "z": 0, "value": 0 }, { "x": -2, "y": 3, "z": -1, "value": 0 }],
        [{ "x": -1, "y": -2, "z": 3, "value": 0 }, { "x": -1, "y": -1, "z": 2, "value": 0 }, { "x": -1, "y": 0, "z": 1, "value": 0 }, { "x": -1, "y": 1, "z": 0, "value": 0 }, { "x": -1, "y": 2, "z": -1, "value": 0 }, { "x": -1, "y": 3, "z": -2, "value": 0 }],
        [
            {
                "x": 0, "y": -3, "z": 3, "value": 4
            },
            {
                "x": 0, "y": -2, "z": 2, "value": 4
            },
            {
                "x": 0, "y": -1, "z": 1, "value": 0
            },
            {
                "x": 0, "y": 0, "z": 0, "value": 0
            },
            {
                "x": 0, "y": 1, "z": -1, "value": 0
            },
            {
                "x": 0, "y": 2, "z": -2, "value": 0
            },
            {
                "x": 0, "y": 3, "z": -3, "value": 0
            }
        ],
        [{ "x": 1, "y": -3, "z": 2, "value": 0 }, { "x": 1, "y": -2, "z": 1, "value": 0 }, { "x": 1, "y": -1, "z": 0, "value": 0 }, { "x": 1, "y": 0, "z": -1, "value": 0 }, { "x": 1, "y": 1, "z": -2, "value": 0 }, { "x": 1, "y": 2, "z": -3, "value": 0 }],
        [{ "x": 2, "y": -3, "z": 1, "value": 0 }, { "x": 2, "y": -2, "z": 0, "value": 0 }, { "x": 2, "y": -1, "z": -1, "value": 0 }, { "x": 2, "y": 0, "z": -2, "value": 0 }, { "x": 2, "y": 1, "z": -3, "value": 0 }],
        [{ "x": 3, "y": -3, "z": 0, "value": 0 }, { "x": 3, "y": -2, "z": -1, "value": 0 }, { "x": 3, "y": -1, "z": -2, "value": 0 }, { "x": 3, "y": 0, "z": -3, "value": 0 }]
    ]

    expect(steps(beforeMove, 'up')).toEqual(afterMove);
})
*/
