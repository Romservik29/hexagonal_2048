import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { addCeelsOnMap, generateMap, mapToColumns, notEmptyCeels } from './app/mapGenerator'
import { Container } from './components/Container'
import Grid from './components/Grid'

export default function App(props) {
    const [radius, setRadius] = useState(0)
    const [map, setMap] = useState(0)
    const [isGameOver, setIsGameOver] = useState(false);
    let location = useLocation();
    useEffect(() => {
        console.log(location.hash)
        radiusClick(+location.hash.slice(-1))
    }, [])
    const radiusClick = (e) => {
        setRadius(e)
        let newMap = generateMap(e)
        setMap(newMap)
        axios
            .post(`http://localhost:13337/${e}`, notEmptyCeels(newMap))
            .then(res => {
                setMap([...addCeelsOnMap(newMap, res.data)])
            })
    }

    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <button onClick={() => radiusClick(2)}>2</button>
                <button onClick={() => radiusClick(3)}>3</button>
                <button onClick={() => radiusClick(4)}>4</button>
                {isGameOver ? (
                    <div>
                        Game Status: <span data-status="playing">playing</span>
                    </div>
                ) : (
                    <div>
                        Game Status: <span data-status="playing">playing</span>
                    </div>
                )}
            </div>

            {radius != 0 ? <Grid radius={radius} map={map} setMap={setMap} /> : false}
        </div>
    )
}
