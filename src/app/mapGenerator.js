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
        let r1 = Math.max(-map_radius, -q - map_radius);
        let r2 = Math.min(map_radius, -q + map_radius);
        for (let r = r1; r <= r2; r++) {
            map.push(new Hex(q, (-q + (- r)) === -0 ? 0 : (-q + (- r)), r, 0));//не знаю как -0 убрат)
        }
    }
    return map
}

export function notEmptyCeels(map) {
    return map.filter(hex => hex.value !== 0)
}

export function emptyCeels(map) {
    return map.some(hex => hex.value === 0)
}

export function addCeelsOnMap(map, cells) {
    cells.forEach(cell =>
        map.filter(hex => hex.x === cell.x ? hex.y === cell.y : false)[0].value = cell.value)
    return map
}
