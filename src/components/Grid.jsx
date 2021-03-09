import React, { Component } from 'react'
import { addCeelsOnMap, columnsToMap, generateMap, mapToColumns, notEmptyCeels } from '../app/mapGenerator';
import { Hex } from './Hex';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Container } from './Container';

export default function Grid(props) {

    useEffect(() => {
        document.addEventListener('keypress', onKeypress);
        return () => {
            document.removeEventListener('keypress', onKeypress);
        };
    }, [props.map]);

    const onKeypress = e => {
        if (e.key.toLowerCase() === 'w') {
            console.log('w')
            console.log(props.map)
            axios
                .post(`http://localhost:13337/${props.radius}`, notEmptyCeels(props.map))
                .then(res => {
                    props.setMap([...addCeelsOnMap(props.map, res.data)])
                })
        }
    };

    return (
        <div className="App">

            {console.log("render")}
            {console.log(props.map)}

            <Container >
                {props.map.map((arr) =>
                    <div>{arr.map(arr =>
                        <Hex data-value={arr.x} data-x={arr.x} data-y={arr.y} data={arr.z} key={Math.random(123)}>
                            <div >{arr.x + ','}{arr.y + ' '}{arr.value}
                            </div>
                        </Hex>)}
                    </div>)}
            </Container>
        </div>
    );
}