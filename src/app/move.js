// move and sum cells in up the axis X
export const sumUp = (columns, switcher) => {
    for (let i = 0; i < columns.length; i++) {
        move(columns, switcher)
        for (let j = 0; j < columns[i].length - 1; j++) {
            if (columns[i][j] !== undefined && columns[i][j + 1]) {
                if (columns[i][j].value === columns[i][j + 1].value) {
                    columns[i][j].value *= 2
                    columns[i][j + 1].value = 0
                }
            }
        }
    }
    return columns
}
// move and sum cells in down the axis X
export const sumDown = (columns, switcher) => {
    for (let i = 0; i < columns.length; i++) {
        columns = move(columns, switcher)
        for (let j = columns[i].length - 1; j > 0; j--) {
            if (columns[i][j] !== undefined && columns[i][j - 1]) {
                if (columns[i][j].value === columns[i][j - 1].value) {
                    columns[i][j].value *= 2
                    columns[i][j - 1].value = 0
                }
            }
        }
    }
    return columns
}
// move and sum cells in up the axis Y|Z
export const sumRUp = (columns, switcher) => {
    console.log("columns")
    console.log(columns)
    for (let i = Math.ceil(columns.length / 2); i < columns.length; i++) {
        move(columns, switcher)
        for (let j = 0; j < columns[i].length - 1; j++) {
            if (columns[i][j] !== undefined && columns[i][j + 1]) {
                if (columns[i][j].value === columns[i][j + 1].value) {
                    columns[i][j].value *= 2
                    columns[i][j + 1].value = 0
                }
            }
        }
    }
    for (let i = 0; i < Math.ceil(columns.length / 2); i++) {
        columns = move(columns, switcher)
        for (let j = columns[i].length - 1; j > 0; j--) {
            if (columns[i][j] !== undefined && columns[i][j - 1]) {
                if (columns[i][j].value === columns[i][j - 1].value) {
                    columns[i][j].value *= 2
                    columns[i][j - 1].value = 0
                }
            }
        }
    }
    return columns
}
// move and sum cells in up the axis Y|Z
export const sumLDown = (columns, switcher) => {
    for (let i = 0; i < Math.sign(columns.length / 2); i++) {
        move(columns, switcher)
        for (let j = columns[i].length - 1; j > 0; j--) {
            if (columns[i][j] !== undefined && columns[i][j - 1]) {
                if (columns[i][j].value === columns[i][j - 1].value) {
                    columns[i][j].value *= 2
                    columns[i][j - 1].value = 0
                }
            }
        }
    }
    for (let i = Math.sign(columns.length / 2); i < columns.length; i++) {
        columns = move(columns, switcher)
        for (let j = 0; j < columns[i].length - 1; j++) {
            if (columns[i][j] !== undefined && columns[i][j + 1]) {
                if (columns[i][j].value === columns[i][j + 1].value) {
                    columns[i][j].value *= 2
                    columns[i][j + 1].value = 0
                }
            }
        }
    }
    return columns
}

export const sumRightUp = (columns, radius) => {
    console.log('click')
    let newColumns = changeDim(columns, radius, 'y')
    newColumns = sumRUp(newColumns, 0);
    newColumns = changeDim(columns, radius, 'x')
    return newColumns
}
export const sumLeftDown = (columns, radius) => {
    console.log('click')
    let newColumns = changeDim(columns, radius, 'y')
    newColumns = sumLDown(newColumns, 1);
    newColumns = changeDim(columns, radius, 'x')
    return newColumns
}
export const sumLeftUp = (columns, radius) => {
    let newColumns = changeDim(columns, radius, 'z')
    newColumns = sumLDown(newColumns, 1);
    newColumns = changeDim(columns, radius, 'x')
    return newColumns
}
export const sumRightDown = (columns, radius) => {
    let newColumns = changeDim(columns, radius, 'z')
    newColumns = sumRUp(newColumns, 0);
    newColumns = changeDim(columns, radius, 'x')
    return newColumns
}
// move cell
export const move = (columns, switcher) => {
    if (switcher === 1) {
        for (let i = 0; i < columns.length; i++) {
            for (let j = columns[i].length - 1; j > 0; j--) {
                if (columns[i][j] !== undefined && columns[i][j - 1] !== undefined) {
                    if (columns[i][j - 1].value === 0) {
                        columns[i][j - 1].value = columns[i][j].value
                        columns[i][j].value = 0
                        if (columns[i][j].value !== columns[i][j - 1].value) { j = columns[i].length }
                    }
                }
            }
        }
    }
    else {
        for (let i = 0; i < columns.length; i++) {//down
            for (let j = 0; j < columns[i].length; j++) {
                if (columns[i][j + 1] !== undefined) {
                    if (columns[i][j + 1].value === 0) {
                        columns[i][j + 1].value = columns[i][j].value
                        columns[i][j].value = 0
                        if (columns[i][j].value !== columns[i][j + 1].value) { j = 0 }
                    }
                }
            }
        }
    }
    return columns
}
// Change dimension on x,y,z
export function changeDim(columns, radius, dim) {
    let q = -radius + 1
    let newColumns = [];

    const createColumn = (columns, q, dim) => {
        let column = []
        for (let i = 0; i < columns.length; i++) {
            for (let j = 0; j < columns[i].length; j++) {
                if (columns[i][j][dim] === q) {
                    if (columns[i][j]) {
                        column.push(columns[i][j])
                    }
                }
            }

        }
        return column
    }

    for (q; q < radius; q++) {
        newColumns
            .push(createColumn(columns, q, dim))

    }
    //reverse column r > 0
    /*for (let i = 0; i < newColumns.length; i++) {
        if (i + (-radius + 1) > 0) {
            if (dim === 'x') {
                newColumns[i].sort((a, b) => {
                    newColumns.forEach(column => column.sort((a, b) => {
                        if (a.y < b.y) return 1
                        else return -1
                    }
                    ))
                    if (a.z > b.z) return 1
                    else return -1
                })
            }
            else if (dim === 'z') {
                newColumns[i].sort((a, b) => {
                    if (a.y > b.y) return 1
                    else return -1
                })
            }

            else newColumns[i].sort((a, b) => {
                if (a.x > b.x) return 1
                else return -1
            })
        }

    }*/
    return newColumns
}
//step manager
export const steps = (columns, vector, radius) => {
    switch (vector) {
        case 'upX': return sumUp(columns, 1)
        case 'downX': return sumDown(columns, 0)
        case 'upY': return sumRightUp(columns, radius)
        case 'downY': return sumLeftDown(columns, radius)
        case 'upZ': return sumLeftUp(columns, radius)
        case 'downZ': return sumRightDown(columns, radius)
    }
}