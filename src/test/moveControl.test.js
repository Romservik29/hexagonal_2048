import move from "../move"
import sum from "../sum"

test('moveXUp', () => {
    const radius = 2
    const map2 = [
        { x: -1, y: 1, z: 0, value: 4 },
        { x: -1, y: 0, z: 1, value: 0 },
        { x: 0, y: 1, z: -1, value:4 },
        { x: 0, y: 0, z: 0, value: 2 },
        { x: 0, y: -1, z: 1, value: 0 },
        { x: 1, y: 0, z: -1, value: 4 },
        { x: 1, y: -1, z: 0, value: 0 }
    ]
    const map =
        [{ x: -1, y: 1, z: 0, value: 2 },
        { x: -1, y: 0, z: 1, value: 2 },
        { x: 0, y: 1, z: -1, value: 2 },
        { x: 0, y: 0, z: 0, value: 2 },
        { x: 0, y: -1, z: 1, value: 2 },
        { x: 1, y: 0, z: -1, value: 2 },
        { x: 1, y: -1, z: 0, value: 2 }
        ]
    expect(move(sum(move(map,radius,'x'), radius, 'x'), radius, 'x')).toEqual(map2)
})