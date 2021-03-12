class Hex {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.value = 0;
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
            column.push(new Hex(q, r, -q - r));
        }
        map.push(column)
    }
    console.log("map generated")
    console.log(map)
    return map
}

export function mapToColumns(map, radius) {
    let q = -radius + 1
    let columns = [];
    for (q; q < radius; q++) {
        columns
            .push(
                map
                    .filter(item => item.x === q)
                    .sort((a, b) => {
                        if (a.x < 0) {
                            if (a.y < b.y) return 1
                            else return -1
                        }
                        else return 1
                    }
                    )
            )

    }
    return columns
}

export function columnsToMap(columns) {
    let map = [];
    for (let i = 0; i < columns.length; i++) {
        for (let j = 0; j < columns[i].length; j++) {
            map.push(columns[i][j])
        }
    }
    return map;
}

export function notEmptyCeels(map) {
    let ceels = []
    let currentMap = map
    currentMap.filter(column => column.map(item => item.value !== 0 ? ceels.push(item) : false))
    console.log("ceels")
    console.log(ceels)
    return ceels
}

export function addCeelsOnMap(map, cells) {
    cells.forEach(cell => {
        return map.map(column => column.map(item => {
            if (item.x === cell.x && item.y === cell.y)
                return item.value = cell.value
        }))
    })
    return map
}
