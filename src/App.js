import './App.css'
import React, { useEffect, useState } from 'react'
import Grid from './components/Grid'
import styled from 'styled-components';

export default function App() {
    const [radius, setRadius] = useState(0)
    const [isGameOver, setIsGameOver] = useState(false);
    const [activeBtn, setActiveBtn] = useState(0)
    const [url, setUrl] = useState('http://localhost:13337/')
    const [location] = useState(window.location);
    useEffect(() => {
        radiusClick(+location.hash.slice(-1))
    }, [])
    const radiusClick = (e) => {
        setRadius(e)
        setActiveBtn(e)
    }
    const handleChange = (e) => {
        setUrl(e.target.value)
    }
    return (
        <Container>
            <div className="controls">
                <div>
                    <select id="url-server" value={url} onChange={handleChange}>
                        <option value="//68f02c80-3bed-4e10-a747-4ff774ae905a.pub.instances.scw.cloud/">{"//68f02c80-3bed-4e10-a747-4ff774ae905a.pub.instances.scw.cloud/"}</option>
                        <option id="localhost" value='http://localhost:13337/'>{'http://localhost:13337/'}</option>
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

            {radius !== 0 ? <Grid radius={radius} url={url}  setIsGameOver={setIsGameOver} /> : null}
        </Container>
    )
}

const Container = styled.div`
display: grid;
    margin: auto;
    max-width: 500px;
    grid-template-areas:
        "menu"
        "game"
        "status";
`