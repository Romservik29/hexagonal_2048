export function move(map, reverse = false) {

}

export const moveR = (columns, radius, reverse) => {

    for (let i = 0; i < columns.length; i++) {
        for (let j = 0; j < columns[i].length; j++) {
            if (columns[i][j + 1] !== undefined) {
                if (columns[i][j + 1].value === 0) {
                    console.log('1')
                    columns[i][j + 1].value = columns[i][j].value
                    columns[i][j].value = 0
                }
               /* if (columns[i][j].value === columns[i][j + 1].value) {
                    console.log('2')
                    columns[i][j].value *= 2
                    columns[i][j + 1].value = 0
                }*/
            }
        }
    }
    return columns;
}