

export const sumUp = (columns) => {
    for (let i = 0; i < columns.length; i++) {
        moveUp(columns)
        for (let j = 0; j < columns[i].length; j++) {
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

export const sumDown = (columns) => {
    for (let i = 0; i < columns.length; i++) {
        columns = moveDown(columns)
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
export const moveRightUp = (columns, radius) => {
    let newColumns = changeDim(columns, radius, 'z')
    newColumns = sumDown(newColumns);
    newColumns = changeDim(columns, radius, 'x')
    return newColumns
}
export const moveRightDown = (columns, radius) => {
    let newColumns = changeDim(columns, radius, 'z')
    newColumns = sumUp(newColumns);
    newColumns = changeDim(columns, radius, 'x')
    return newColumns
}
export const moveLeftUp = (columns, radius) => {
    let newColumns = changeDim(columns, radius, 'y')
    newColumns = sumUp(newColumns);
    newColumns = changeDim(columns, radius, 'x')
    return newColumns
}

export const moveLeftDown = (columns, radius) => {
    let newColumns = changeDim(columns, radius, 'y')
    newColumns = sumDown(newColumns);
    newColumns = changeDim(columns, radius, 'x')
    return newColumns
}

export const moveUp = (columns) => {
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
    return columns
}

export const moveDown = (columns) => {
    for (let i = 0; i < columns.length; i++) {
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
    return columns
}

export function changeDim(columns, radius, dim) {
    let q = -radius + 1
    let newColumns = [];

    const createColumn = (columns, q, dim) => {
        let column = []
        for (let i = 0; i < columns.length; i++) {
            for (let j = 0; j < columns[i].length; j++)
                if (columns[i][j][dim] === q) {
                    if (columns[i][j])
                        column.push(columns[i][j])
                }
        }
        return column.sort((a, b) => {
            if (dim !== 'x' ? a.y > 0 : false) {
                if (dim !== 'x' ?a.x < b.x : false ) return 1
                else return -1
            }
            else return 1
        })

    }

    for (q; q < radius; q++) {
        newColumns
            .push(createColumn(columns, q, dim))

    }
    return newColumns
}

export const steps = (columns, vector, radius) => {
    switch (vector) {
        case 'up': return sumUp(columns)
        case 'down': return sumDown(columns)
        case 'dimZUp': return moveRightUp(columns, radius)
        case 'dimZDown': return moveRightDown(columns, radius)
        case 'dimYUp': return moveLeftUp(columns,radius)
        case 'dimYDown': return moveLeftDown(columns,radius)
    }
}