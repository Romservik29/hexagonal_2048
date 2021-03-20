import sum from "../sum"

test('sumXUp', () => {
    const map = [
        { x: -1, y: 1, z: 0, value: 2 },
        { x: -1, y: 0, z: 1, value: 2 },
        { x: 0, y: 1, z: -1, value: 2 },
        { x: 0, y: 0, z: 0, value: 2 },
        { x: 0, y: -1, z: 1, value: 2 },
        { x: 1, y: 0, z: -1, value: 2 },
        { x: 1, y: -1, z: 0, value: 2 }
    ]
    const map2 =
        [{ x: -1, y: 1, z: 0, value: 4 },
        { x: -1, y: 0, z: 1, value: 0 },
        { x: 0, y: 1, z: -1, value: 4 },
        { x: 0, y: 0, z: 0, value: 0 },
        { x: 0, y: -1, z: 1, value: 2 },
        { x: 1, y: 0, z: -1, value: 4 },
        { x: 1, y: -1, z: 0, value: 0 }
        ]
    expect(sum(map, 2, 'x')).toEqual(map2)
})

test('sumXDown', () => {
    const map = [
        { x: -1, y: 1, z: 0, value: 2 },
        { x: -1, y: 0, z: 1, value: 2 },
        { x: 0, y: 1, z: -1, value: 2 },
        { x: 0, y: 0, z: 0, value: 2 },
        { x: 0, y: -1, z: 1, value: 2 },
        { x: 1, y: 0, z: -1, value: 2 },
        { x: 1, y: -1, z: 0, value: 2 }
    ]
    const map2 = [
        { x: -1, y: 1, z: 0, value: 0 },
        { x: -1, y: 0, z: 1, value: 4 },
        { x: 0, y: 1, z: -1, value: 2 },
        { x: 0, y: 0, z: 0, value: 0 },
        { x: 0, y: -1, z: 1, value: 4 },
        { x: 1, y: 0, z: -1, value: 0 },
        { x: 1, y: -1, z: 0, value: 4 }
    ]

    expect(sum(map, 2, 'x', false)).toEqual(map2)
})
test('sumYUp', () => {
    const map = [
        { x: -1, y: 1, z: 0, value: 2 },
        { x: -1, y: 0, z: 1, value: 2 },
        { x: 0, y: 1, z: -1, value: 2 },
        { x: 0, y: 0, z: 0, value: 2 },
        { x: 0, y: -1, z: 1, value: 2 },
        { x: 1, y: 0, z: -1, value: 2 },
        { x: 1, y: -1, z: 0, value: 2 }
    ]
    const map2 = [
        { x: -1, y: 1, z: 0, value: 0 },
        { x: -1, y: 0, z: 1, value: 2 },
        { x: 0, y: 1, z: -1, value: 4 },
        { x: 0, y: 0, z: 0, value: 0 },
        { x: 0, y: -1, z: 1, value: 0 },
        { x: 1, y: 0, z: -1, value: 4 },
        { x: 1, y: -1, z: 0, value: 4 }
    ]

    expect(sum(map, 2, 'y', false)).toEqual(map2)
})
test('sumYDown', () => {
    const map = [
        { x: -1, y: 1, z: 0, value: 2 },
        { x: -1, y: 0, z: 1, value: 2 },
        { x: 0, y: 1, z: -1, value: 2 },
        { x: 0, y: 0, z: 0, value: 2 },
        { x: 0, y: -1, z: 1, value: 2 },
        { x: 1, y: 0, z: -1, value: 2 },
        { x: 1, y: -1, z: 0, value: 2 }
    ]
    const map2 =
        [
            { x: -1, y: 1, z: 0, value: 4 },
            { x: -1, y: 0, z: 1, value: 4 },
            { x: 0, y: 1, z: -1, value: 0 },
            { x: 0, y: 0, z: 0, value: 0 },
            { x: 0, y: -1, z: 1, value: 4 },
            { x: 1, y: 0, z: -1, value: 2 },
            { x: 1, y: -1, z: 0, value: 0 }
        ]

    expect(sum(map, 2, 'y')).toEqual(map2)
})
test('sumZUp', () => {
    const map = [
        { x: -1, y: 1, z: 0, value: 2 },
        { x: -1, y: 0, z: 1, value: 2 },
        { x: 0, y: 1, z: -1, value: 2 },
        { x: 0, y: 0, z: 0, value: 2 },
        { x: 0, y: -1, z: 1, value: 2 },
        { x: 1, y: 0, z: -1, value: 2 },
        { x: 1, y: -1, z: 0, value: 2 }
    ]
    const map2 =
        [{ x: -1, y: 1, z: 0, value: 4 },
        { x: -1, y: 0, z: 1, value: 4 },
        { x: 0, y: 1, z: -1, value: 4 },
        { x: 0, y: 0, z: 0, value: 0 },
        { x: 0, y: -1, z: 1, value: 0 },
        { x: 1, y: 0, z: -1, value: 0 },
        { x: 1, y: -1, z: 0, value: 2 }
        ]
    expect(sum(map, 2, 'z')).toEqual(map2)
})
test('sumZDown', () => {
    const map = [
        { x: -1, y: 1, z: 0, value: 2 },
        { x: -1, y: 0, z: 1, value: 2 },
        { x: 0, y: 1, z: -1, value: 2 },
        { x: 0, y: 0, z: 0, value: 2 },
        { x: 0, y: -1, z: 1, value: 2 },
        { x: 1, y: 0, z: -1, value: 2 },
        { x: 1, y: -1, z: 0, value: 2 }
    ]
    const map2 = [
        { x: -1, y: 1, z: 0, value: 2 },
        { x: -1, y: 0, z: 1, value: 0 },
        { x: 0, y: 1, z: -1, value: 0 },
        { x: 0, y: 0, z: 0, value: 0 },
        { x: 0, y: -1, z: 1, value: 4 },
        { x: 1, y: 0, z: -1, value: 4 },
        { x: 1, y: -1, z: 0, value: 4 }
    ]
    expect(sum(map, 2, 'z', false)).toEqual(map2)
})