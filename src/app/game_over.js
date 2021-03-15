import { Hex, emptyCeels } from './mapGenerator'

export function gameover(grid) {
    let status = false
    let cube_directions = [
        new Hex(+1, -1, 0), new Hex(+1, 0, -1), new Hex(0, +1, -1),
        new Hex(-1, +1, 0), new Hex(-1, 0, +1), new Hex(0, -1, +1),
    ]
    if (emptyCeels(grid) === true) return false
    else if (emptyCeels(grid) === false) {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                let neighbors = []
                cube_directions.forEach(hex => {
                    neighbors.push({
                        x: grid[i][j].x + hex.x,
                        y: grid[i][j].y + hex.y,
                        z: grid[i][j].z + hex.z,
                        value: grid[i][j].value
                    })
                })
                if (neighbors.some(hex => {
                    return grid.some(column => {
                        return column.some(item => (hex.x === item.x && hex.y === item.y && hex.value === item.value))
                    });

                })) return status = false
            }
        }
    } else return true
    return status = true
}