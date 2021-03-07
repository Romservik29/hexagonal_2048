class Hex {
    constructor(q, r, s) {
        this.q = q;
        this.r = r;
        this.s = s;
        this.value = 2;
        if (Math.round(q + r + s) !== 0)
            throw "q + r + s must be 0";
    }
}

export function generateMap(radius) {
    let map = [];
    let map_radius = radius - 1
    for (let q = -map_radius; q <= map_radius; q++) {
        let r1 = Math.max(-map_radius, -q - map_radius);
        let r2 = Math.min(map_radius, -q + map_radius);
        for (let r = r1; r <= r2; r++) {
            map.push(new Hex(q, r, -q - r));
        }
    }
    let q = -radius + 1
    let items = [];
    for (q; q < radius; q++) {
        items
            .push(
                map
                    .filter(item => item.q === q)
                    .sort((a, b) => {
                        if (a.q < 0) {
                            if (a.r < b.r) return 1
                            else return -1
                        }
                        else return 1
                    }
                    )
            )
    }
    map = items
    map[1][0].value = 0
    map[0][0].value = 0
    return map
}
