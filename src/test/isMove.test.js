import { isMove } from "../app/isMove"

test('isMove', () => {
    const map = [
        { x: -1, y: 1, z: 0, value: 2 },
        { x: -1, y: 0, z: 1, value: 2 },
        { x: 0, y: 1, z: -1, value: 2 },
        { x: 0, y: 0, z: 0, value: 0 },
        { x: 0, y: -1, z: 1, value: 2 },
        { x: 1, y: 0, z: -1, value: 2 },
        { x: 1, y: -1, z: 0, value: 2 }
    ]
    expect(isMove(map,2,'x')).toBe(true)
    expect(isMove(map,2,'x',false)).toBe(true)
    expect(isMove(map,2,'y')).toBe(true)
    expect(isMove(map,2,'y',false)).toBe(true)
    expect(isMove(map,2,'z')).toBe(true)
    expect(isMove(map,2,'z',false)).toBe(true)
})
test('isMove', () => {
    const map = [
        { x: -1, y: 1, z: 0, value: 2 },
        { x: -1, y: 0, z: 1, value: 2 },
        { x: 0, y: 1, z: -1, value: 4 },
        { x: 0, y: 0, z: 0, value: 6 },
        { x: 0, y: -1, z: 1, value: 8 },
        { x: 1, y: 0, z: -1, value: 10 },
        { x: 1, y: -1, z: 0, value: 12 }
    ]
    expect(isMove(map,2,'x')).toBe(true)
    expect(isMove(map,2,'x',false)).toBe(true)
    expect(isMove(map,2,'y')).toBe(false)
    expect(isMove(map,2,'y',false)).toBe(false)
    expect(isMove(map,2,'z')).toBe(false)
    expect(isMove(map,2,'z',false)).toBe(false)
})
test('isMove', () => {
    const map = [
        { x: -1, y: 1, z: 0, value: 0 },
        { x: -1, y: 0, z: 1, value: 1 },
        { x: 0, y: 1, z: -1, value: 4 },
        { x: 0, y: 0, z: 0, value: 6 },
        { x: 0, y: -1, z: 1, value: 8 },
        { x: 1, y: 0, z: -1, value: 2 },
        { x: 1, y: -1, z: 0, value: 2 }
    ]
    expect(isMove(map,2,'x')).toBe(true)
    expect(isMove(map,2,'x',false)).toBe(true)
    expect(isMove(map,2,'y')).toBe(true)
    expect(isMove(map,2,'y',false)).toBe(false)
    expect(isMove(map,2,'z')).toBe(true)
    expect(isMove(map,2,'z',false)).toBe(false)
})