export class Hex {
    constructor(x, y, z, value) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.value = value;
    }
}

export function generateMap(radius) {
    let map = []
    let map_radius = radius - 1
    for (let q = -map_radius; q <= map_radius; q++) {
        let column = []
        let r1 = Math.max(-map_radius, -q - map_radius);
        let r2 = Math.min(map_radius, -q + map_radius);
        for (let r = r1; r <= r2; r++) {
            column.push(new Hex(q, (-q + (- r))===-0? 0 :(-q + (- r)) , r, 0));//не знаю как -0 убрат)
        }
        map.push(column)
    }
    return map
}

export function notEmptyCeels(map) {
    let ceels = []
    let currentMap = map
    currentMap.filter(column => column.map(item => item.value !== 0 ? ceels.push(item) : false))
    return ceels
}
export function emptyCeels(map) {
    let currentMap = map
    return currentMap.some(column => column.some(item => item.value === 0))
}

export function addCeelsOnMap(map, cells) {
    cells.forEach(cell => {
        map.map(column => column.map(item => {
            if (item.x === cell.x && item.y === cell.y)
                return item.value = cell.value
        }))
    })
    return map
}
