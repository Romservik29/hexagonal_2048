import { Hex, emptyCeels } from './mapGenerator'

export function gameover(grid) {
    let cube_directions = [
        new Hex(+1, -1, 0), new Hex(+1, 0, -1), new Hex(0, +1, -1),
        new Hex(-1, +1, 0), new Hex(-1, 0, +1), new Hex(0, -1, +1),
    ]
    if (emptyCeels(grid) === true) return false
    else if (emptyCeels(grid) === false) {
        debugger
        for (let i = 0; i < grid.length; i++) {
            let neighbors = []
            cube_directions.forEach(hex => {
                neighbors.push({
                    x: grid[i].x + hex.x,
                    y: grid[i].y + hex.y,
                    z: grid[i].z + hex.z,
                    value: grid[i].value
                })
            })
            if (neighbors.some(hex => {
                return grid.some(item => (hex.x === item.x && hex.y === item.y && hex.value === item.value))
            })) return false
        }
    } else return true
    return true
}