// move and sum cells in up the axis X
export function sumUp(columns, switcher) {
    for (let i = 0; i < columns.length; i++) {
        move(columns, switcher)
        for (let j = 0; j < columns[i].length - 1; j++) {
            if (columns[i][j] !== undefined && columns[i][j + 1]) {
                if (columns[i][j].value === columns[i][j + 1].value && (columns[i][j].value + columns[i][j + 1].value) !== 0) {
                    columns[i][j].value *= 2
                    columns[i][j + 1].value = 0
                }
            }
        }
    }
    return columns
}
// move and sum cells in down the axis X
export function sumDown(columns, switcher) {
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
// move and sum cells in up the axis Y|Z    TODO: BUG on Center Line search correctly alghorithn 
export function sumRUp(columns, switcher) {
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
export function sumLDown(columns, switcher) {
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

export function sumRightUp(columns, radius) {
    let newColumns = changeDim(columns, radius, 'y')
    newColumns = sumRUp(newColumns, 0);
    newColumns = changeDim(columns, radius, 'x')
    return newColumns
}
export function sumLeftDown(columns, radius) {
    let newColumns = changeDim(columns, radius, 'y')
    newColumns = sumLDown(newColumns, 1);
    newColumns = changeDim(columns, radius, 'x')
    return newColumns
}
export function sumLeftUp(columns, radius) {
    let newColumns = changeDim(columns, radius, 'z')
    newColumns = sumLDown(newColumns, 1);
    newColumns = changeDim(columns, radius, 'x')
    return newColumns
}
export function sumRightDown(columns, radius) {
    let newColumns = changeDim(columns, radius, 'z')
    newColumns = sumRUp(newColumns, 0);
    newColumns = changeDim(columns, radius, 'x')
    return newColumns
}
// move cell
export function move(map, switcher) {
    let columns = [...map]
    if (switcher === 1) {//up
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