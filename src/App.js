import React, { useEffect, useState } from 'react'
import { addCeelsOnMap, generateMap, mapToColumns } from './app/mapGenerator'
import { Container } from './components/Container'
import Grid from './components/Grid'

export default function App() {
    const [radius, setRadius] = useState(0)
    const [map, setMap] = useState(0)
    
    const radiusClick = (e) => {
        setRadius(e)
        setMap(generateMap(e))
    }

    return (
        <Container>
            {console.log("render app")}
            <button onClick={() => radiusClick(2)}>2</button>
            <button onClick={() => radiusClick(3)}>3</button>
            <button onClick={() => radiusClick(4)}>4</button>
            {radius}
            {radius != 0 ? <Grid radius={radius} map={map} setMap={setMap}/> : false}

        </Container>
    )
}
