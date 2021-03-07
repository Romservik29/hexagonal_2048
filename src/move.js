
export function move(map,reverse = false) {

    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            reverse ? map[i].reverse() : false
            if (map[i][j - 1] !== undefined) {
                if (map[i][j - 1].value === 0) {
                    console.log('1')
                    map[i][j - 1].value = map[i][j].value
                    map[i][j].value = 0

                }
                if (map[i][j].value === map[i][j + 1].value) {
                    console.log('2')
                    map[i][j].value *= 2
                    map[i][j + 1].value = 0
                    j = 0
                }
            }
        }

    }
}