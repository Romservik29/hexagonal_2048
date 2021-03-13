export const sumUp = (columns,switcher) => {    
    for (let i = 0; i < columns.length; i++) {
        move(columns,switcher)
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
export const sumDown = (columns,switcher) => {
    for (let i = 0; i < columns.length; i++) {
        columns = move(columns,switcher)
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
    newColumns = sumDown(newColumns, 0);
    newColumns = changeDim(columns, radius, 'x')
    return newColumns
}
export const moveLeftUp = (columns, radius) => {
    let newColumns = changeDim(columns, radius, 'y')
    newColumns = sumUp(newColumns, 1);
    newColumns = changeDim(columns, radius, 'x')
    return newColumns
}

export const moveRightDown = (columns, radius) => {
    let newColumns = changeDim(columns, radius, 'y')
    newColumns = sumUp(newColumns,0);
    newColumns = changeDim(columns, radius, 'x')
    return newColumns
}

export const moveLeftDown = (columns, radius) => {
    let newColumns = changeDim(columns, radius, 'z')
    newColumns = sumUp(newColumns, 1);
    newColumns = changeDim(columns, radius, 'x')
    return newColumns
}

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

function changeDim(columns, radius, dim) {
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
    for (let i = 0; i < newColumns.length; i++) {
        if (i + (-radius + 1) > 0) {
            if (dim === 'x') {
                newColumns[i].sort((a, b) => {
                    newColumns.forEach(column => column.sort((a, b) => {
                        if (a.y > b.y) return 1
                        else return -1
                    }
                    ))
                    if (a.z < b.z) return 1
                    else return -1
                })
            }
            else if (dim === 'z')
                newColumns[i].sort((a, b) => {
                    if (a.x > b.x) return 1
                    else return -1
                })
            else newColumns[i].sort((a, b) => {
                if (a.x > b.x) return 1
                else return -1
            })
        }

    }
    return newColumns
}

export const steps = (columns, vector, radius) => {
    switch (vector) {
        case 'up': return sumUp(columns,1)
        case 'down': return sumDown(columns,0)
        case 'dimZUp': return moveRightUp(columns, radius)
        case 'dimZDown': return moveLeftDown(columns, radius)
        case 'dimYUp': return moveLeftUp(columns,radius)
        case 'dimYDown': return moveRightDown(columns,radius)
    }
}