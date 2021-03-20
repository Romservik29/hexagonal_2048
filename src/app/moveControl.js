import move from './move'
import sum from './sum'
import isMove from './isMove'

export const moveControler = (map, radius = 2, key) => {
    switch (key) {
        case 'KeyW': return isMove(map, radius, 'x') ? move(sum(move(map, radius, 'x'), radius, 'x'), radius, 'x') : false
        case 'KeyS': return isMove(map, radius, 'x', false) ? move(sum(move(map, radius, 'x', false), radius, 'x', false), radius, 'x', false) : false
        case 'KeyE': return isMove(map,radius, "y",false) ? move(sum(move(map, radius, 'y', false), radius, 'y', false), radius, 'y', false) : false
        case 'KeyA': return isMove(map,radius, "y") ? move(sum(move(map, radius, 'y'), radius, 'y'), radius, 'y') : false
        case 'KeyQ': return isMove(map,radius, "z") ? move(sum(move(map, 2, 'z'), 2, 'z'), 2, 'z') : false
        case 'KeyD': return isMove(map,radius, "z",false) ? move(sum(move(map, 2, 'z', false), 2, 'z', false), 2, 'z', false) : false
        default: return false
    }
}