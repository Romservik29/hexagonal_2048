import {addCeelsOnMap, notEmptyCeels} from "../app/mapGenerator";
import {useEffect, useState} from "react";
import axios from "axios";
import {Container} from "./Container";
import "../App.css";
import {gameover} from "../app/game_over";
import Hex from "./Hex";
import {moveControler} from "../app/moveControl";
import CellsField from "./CellsField";

export default function Grid(props) {
  const [hexSize] = useState(100);

  useEffect(() => {
    const onKeypress = (e) => {
      props.setIsGameOver(gameover(props.map));
      let newMap = moveControler(props.map, props.radius, e.code);
      if (newMap !== false)
        axios
          .post(`${props.url}${props.radius}`, notEmptyCeels(newMap))
          .then((res) => {
            newMap = [...addCeelsOnMap(newMap, res.data)];
            props.setIsGameOver(gameover(newMap));
            props.setMap(newMap);
          });
    };
    document.addEventListener("keypress", onKeypress);
    return () => {
      document.removeEventListener("keypress", onKeypress);
    };
  });

  return (
    <div>
      <Container>
        <CellsField />
        <div style={{position: "absolute", width: 500}}>
          {props.map.map((hex) => (
            <Hex
              value={hex.value}
              x={hex.x}
              y={hex.y}
              z={hex.z}
              hexSize={hexSize}
              key={hex.index}
            ></Hex>
          ))}
        </div>
      </Container>
    </div>
  );
}
