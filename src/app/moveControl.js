import move from './move'
import sum from './sum'
import isMove from './isMove'
function moveSumMove(map, radius, vector, up = true) {
    return isMove(map, radius, vector,up)
        ? move(sum(move(map, radius, vector, up), radius, vector, up), radius, vector, up)
        : false
}
export const moveControler = (map, radius = 2, key) => {
    switch (key) {
        case 'KeyW': return moveSumMove(map, radius, 'x')
        case 'KeyS': return moveSumMove(map, radius, 'x', false) 
        case 'KeyE': return moveSumMove(map, radius, "y", false)
        case 'KeyA': return moveSumMove(map, radius, "y")
        case 'KeyQ': return moveSumMove(map, radius, "z") 
        case 'KeyD': return moveSumMove(map, radius, "z", false)
        default: return false
    }
}