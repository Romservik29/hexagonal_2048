import move from "../move"

test('moveXUp', () => {
    const map = [
        { x: -1, y: 1, z: 0, value: 0 },
        { x: -1, y: 0, z: 1, value: 2 },
        { x: 0, y: 1, z: -1, value: 0 },
        { x: 0, y: 0, z: 0, value: 0 },
        { x: 0, y: -1, z: 1, value: 2 },
        { x: 1, y: 0, z: -1, value: 0 },
        { x: 1, y: -1, z: 0, value: 2 }
    ]
    const map2 =
        [{ x: -1, y: 1, z: 0, value: 2 },
        { x: -1, y: 0, z: 1, value: 0 },
        { x: 0, y: 1, z: -1, value: 2 },
        { x: 0, y: 0, z: 0, value: 0 },
        { x: 0, y: -1, z: 1, value: 0 },
        { x: 1, y: 0, z: -1, value: 2 },
        { x: 1, y: -1, z: 0, value: 0 }
        ]
    expect(move(map, 2, 'x')).toEqual(map2)
})
test('moveXDown', () => {
    const map =
        [{ x: -1, y: 1, z: 0, value: 2 },
        { x: -1, y: 0, z: 1, value: 0 },
        { x: 0, y: 1, z: -1, value: 2 },
        { x: 0, y: 0, z: 0, value: 0 },
        { x: 0, y: -1, z: 1, value: 0 },
        { x: 1, y: 0, z: -1, value: 2 },
        { x: 1, y: -1, z: 0, value: 0 }
        ]
    const map2 = [
        { x: -1, y: 1, z: 0, value: 0 },
        { x: -1, y: 0, z: 1, value: 2 },
        { x: 0, y: 1, z: -1, value: 0 },
        { x: 0, y: 0, z: 0, value: 0 },
        { x: 0, y: -1, z: 1, value: 2 },
        { x: 1, y: 0, z: -1, value: 0 },
        { x: 1, y: -1, z: 0, value: 2 }
    ]

    expect(move(map, 2, 'x', false)).toEqual(map2)
})
test('moveYUp', () => {
    const map =
        [{ x: -1, y: 1, z: 0, value: 2 },
        { x: -1, y: 0, z: 1, value: 2 },
        { x: 0, y: 1, z: -1, value: 0 },
        { x: 0, y: 0, z: 0, value: 0 },
        { x: 0, y: -1, z: 1, value: 2 },
        { x: 1, y: 0, z: -1, value: 0 },
        { x: 1, y: -1, z: 0, value: 0 }
        ]
    const map2 = [
        { x: -1, y: 1, z: 0, value: 0 },
        { x: -1, y: 0, z: 1, value: 0 },
        { x: 0, y: 1, z: -1, value: 2 },
        { x: 0, y: 0, z: 0, value: 0 },
        { x: 0, y: -1, z: 1, value: 0 },
        { x: 1, y: 0, z: -1, value: 2 },
        { x: 1, y: -1, z: 0, value: 2 }
    ]

    expect(move(map, 2, 'y', false)).toEqual(map2)
})
test('moveYDown', () => {
    const map2 =
        [{ x: -1, y: 1, z: 0, value: 2 },
        { x: -1, y: 0, z: 1, value: 2 },
        { x: 0, y: 1, z: -1, value: 0 },
        { x: 0, y: 0, z: 0, value: 0 },
        { x: 0, y: -1, z: 1, value: 2 },
        { x: 1, y: 0, z: -1, value: 0 },
        { x: 1, y: -1, z: 0, value: 0 }
        ]
    const map =
        [
            { x: -1, y: 1, z: 0, value: 0 },
            { x: -1, y: 0, z: 1, value: 0 },
            { x: 0, y: 1, z: -1, value: 2 },
            { x: 0, y: 0, z: 0, value: 0 },
            { x: 0, y: -1, z: 1, value: 0 },
            { x: 1, y: 0, z: -1, value: 2 },
            { x: 1, y: -1, z: 0, value: 2 }
        ]

    expect(move(map, 2, 'y')).toEqual(map2)
})
test('moveZUp', () => {
    const map = [
        { x: -1, y: 1, z: 0, value: 0 },
        { x: -1, y: 0, z: 1, value: 0 },
        { x: 0, y: 1, z: -1, value: 0 },
        { x: 0, y: 0, z: 0, value: 0 },
        { x: 0, y: -1, z: 1, value: 2 },
        { x: 1, y: 0, z: -1, value: 2 },
        { x: 1, y: -1, z: 0, value: 2 }
    ]
    const map2 =
        [{ x: -1, y: 1, z: 0, value: 2 },
        { x: -1, y: 0, z: 1, value: 2 },
        { x: 0, y: 1, z: -1, value: 2 },
        { x: 0, y: 0, z: 0, value: 0 },
        { x: 0, y: -1, z: 1, value: 0 },
        { x: 1, y: 0, z: -1, value: 0 },
        { x: 1, y: -1, z: 0, value: 0 }
        ]
    expect(move(map, 2, 'z')).toEqual(map2)
})
test('moveZDown', () => {
    const map =
        [{ x: -1, y: 1, z: 0, value: 2 },
        { x: -1, y: 0, z: 1, value: 2 },
        { x: 0, y: 1, z: -1, value: 2 },
        { x: 0, y: 0, z: 0, value: 2 },
        { x: 0, y: -1, z: 1, value: 0 },
        { x: 1, y: 0, z: -1, value: 0 },
        { x: 1, y: -1, z: 0, value: 0 }
        ]
    const map2 = [
        { x: -1, y: 1, z: 0, value: 0 },
        { x: -1, y: 0, z: 1, value: 0 },
        { x: 0, y: 1, z: -1, value: 0 },
        { x: 0, y: 0, z: 0, value: 2 },
        { x: 0, y: -1, z: 1, value: 2 },
        { x: 1, y: 0, z: -1, value: 2 },
        { x: 1, y: -1, z: 0, value: 2 }
    ]

    expect(move(map, 2, 'z', false)).toEqual(map2)
})