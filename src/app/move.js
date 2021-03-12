export function move(map, reverse = false) {

}

const sumUp = (columns) => {
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

const sumDown = (columns) => {
    for (let i = 0; i < columns.length; i++) {
        columns = moveDown(columns)
        for (let j = columns[i].length -1; j > 0; j--) {
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
export const moveRightUp = (columns) =>{
        for (let i = 0; i < columns.length; i++) {
 {    
            if (columns[i][columns.length-i+1] !== undefined && columns[i][columns.length-i] !== undefined) {
                if (columns[i][columns.length-i+1].value === 0) {
                    columns[i][columns.length-i+1].value = columns[i][columns.length-i].value
                    columns[i][columns.length-i+1].value = 0
                }
            }
        }
    }
    return columns
}
export const sumMovedCells = (columns, vector) => {
    switch(vector){
    case 'up': return sumUp(columns)
    case 'down': return sumDown(columns)
}
}

export const moveUp = (columns) => {
    for (let i = 0; i < columns.length; i++) {
        for (let j = columns[i].length - 1; j > 0; j--) {  
            if (columns[i][j] !== undefined && columns[i][j - 1] !== undefined) {
                if (columns[i][j - 1].value === 0) {
                    columns[i][j - 1].value = columns[i][j].value
                    columns[i][j].value = 0
                    if(columns[i][j].value !== columns[i][j-1].value){j = columns[i].length}
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
                    columns[i][j+1].value = columns[i][j].value
                    columns[i][j].value = 0
                    if(columns[i][j].value !== columns[i][j+1].value){j = 0}
                }
            }
        }
        
    }
    return columns
}