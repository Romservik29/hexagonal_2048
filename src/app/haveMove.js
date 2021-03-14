var cube_diagonals = [
    Cube(+2, -1, -1), Cube(+1, +1, -2), Cube(-1, +2, -1), 
    Cube(-2, +1, +1), Cube(-1, -1, +2), Cube(+1, -2, +1), 
]

function cube_diagonal_neighbor(cube, direction):
    return cube_add(cube, cube_diagonals[direction])