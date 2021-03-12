import React, { Component } from 'react'
import { addCeelsOnMap, notEmptyCeels } from '../app/mapGenerator';
import { Hex } from './Hex';
import { useEffect } from 'react';
import axios from 'axios'
import { Container } from './Container';
import {sumMovedCells } from '../app/move';

export default function Grid(props) {
    useEffect(() => {
        document.addEventListener('keypress', onKeypress);
        return () => {
            document.removeEventListener('keypress', onKeypress);
        };
    }, [props.map]);

    const onKeypress = e => {
        let newMap = props.map;
        if (e.key.toLowerCase() === 'w') {
            console.log('w')
            console.log(props.map)
            newMap = props.map;
            newMap = sumMovedCells(newMap, 'up');
            axios
                .post(`http://localhost:13337/${props.radius}`, notEmptyCeels(newMap))
                .then(res => {
                    props.setMap([...addCeelsOnMap(newMap, res.data)])
                })

        }
        if (e.key.toLowerCase() === 's') {
            console.log('s')
            console.log(props.map)
            newMap = sumMovedCells(newMap, 'down');
            axios
                .post(`http://localhost:13337/${props.radius}`, notEmptyCeels(newMap))
                .then(res => {
                    props.setMap([...addCeelsOnMap(newMap, res.data)])
                })

        }
    };
    const m = [
  [ { x: -1, y: 1, z: 0 }, { x: -1, y: 0, z: 1 } ],
  [
    { x: 0, y: 1, z: -1 },
    { x: 0, y: -1, z: 1 },
    { x: 0, y: 0, z: -0 }
  ],
  [ { x: 1, y: -1, z: 0 }, { x: 1, y: 0, z: -1 } ]
]
    return (
        <div className="App">

            {console.log("render")}
            {console.log(props.map)}

            <Container >
                {props.map.map((arr) =>
                    <div>{arr.map(arr =>
                        <Hex data-value={arr.x} data-x={arr.x} data-y={arr.y} data={arr.z} key={Math.random(123)}>
                            <div >{arr.x + ','}{arr.y + ','}{arr.z + ', '}{arr.value}
                            </div>
                        </Hex>)}
                    </div>)}
            </Container>
        </div>
    );
}