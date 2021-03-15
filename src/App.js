import './App.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { addCeelsOnMap, generateMap, notEmptyCeels } from './app/mapGenerator'
import Grid from './components/Grid'

export default function App() {
    const [radius, setRadius] = useState(0)
    const [map, setMap] = useState(0)
    const [isGameOver, setIsGameOver] = useState(false);
    const [activeBtn, setActiveBtn] = useState(0)
    const [url, setUrl] = useState('//68f02c80-3bed-4e10-a747-4ff774ae905a.pub.instances.scw.cloud/')
    let location = useLocation();
    useEffect(() => {
        if (+location.hash.slice(-1) > 0) radiusClick(+location.hash.slice(-1))
    }, [])
    const radiusClick = (e) => {
        setRadius(e)
        setIsGameOver(false)
        setActiveBtn(e)
        let newMap = generateMap(e)
        console.log(newMap)
        setMap(newMap)
        axios
            .post(`${url}${e}`, notEmptyCeels(newMap))
            .then(res => {
                setMap([...addCeelsOnMap(newMap, res.data)])
            })
    }
    const handleChange = (e) => {
        setUrl(e.target.value)
    }
    return (
        <div>
            <div className="controls">
                <div>
                    <select value={url} onChange={handleChange}>
                        <option value='//68f02c80-3bed-4e10-a747-4ff774ae905a.pub.instances.scw.cloud/'>http://68f02c80-3bed-4e10-a747-4ff774ae905a.pub.instances.scw.cloud/</option>
                        <option value='http://localhost:13337/'>http://localhost:13337/</option>
                    </select>
                </div>
                <button className={activeBtn === 2 ? "active" : null} onClick={() => radiusClick(2)}>2</button>
                <button className={activeBtn === 3 ? "active" : null} onClick={() => radiusClick(3)}>3</button>
                <button className={activeBtn === 4 ? "active" : null} onClick={() => radiusClick(4)}>4</button>
                {isGameOver
                    ? (
                        <div>
                            Game Status: <span data-status="game-over">Game Over</span>
                        </div>
                    )
                    : (
                        <div>
                            Game Status: <span data-status="playing">playing</span>
                        </div>
                    )}
            </div>

            {radius != 0 ? <Grid radius={radius} map={map} url={url} setMap={setMap} setIsGameOver={setIsGameOver} /> : false}
        </div>
    )
}
