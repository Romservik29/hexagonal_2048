import {addCeelsOnMap, generateMap, notEmptyCeels} from "../app/mapGenerator";
import {useEffect, useState} from "react";
import axios from "axios";
import "../App.css";
import {gameover} from "../app/game_over";
import Hex from "./Hex";
import {moveControler} from "../app/moveControl";
import CellsField from "./CellsField";

export default function Grid(props) {
  const [map, setMap] = useState(generateMap(props.radius));
  const [hexSize] = useState(100);
  useEffect(() => {
    props.setIsGameOver(false);
    let newMap = generateMap(props.radius);
    axios
      .post(`${props.url}${props.radius}`, notEmptyCeels(newMap))
      .then((res) => {
        setMap([...addCeelsOnMap(newMap, res.data)]);
      });
  }, [props.radius]);
  useEffect(() => {
    const onKeypress = (e) => {
      props.setIsGameOver(gameover(map));
      let newMap = moveControler(map, props.radius, e.code);
      if (newMap !== false)
        axios
          .post(`${props.url}${props.radius}`, notEmptyCeels(newMap))
          .then((res) => {
            newMap = [...addCeelsOnMap(newMap, res.data)];
            props.setIsGameOver(gameover(newMap));
            setMap(newMap);
          });
    };
    document.addEventListener("keypress", onKeypress);
    return () => {
      document.removeEventListener("keypress", onKeypress);
    };
  });

  return (
    <div>
      <div style={{position: 'relative', width: 500,height: 520}}>
        <CellsField map={map} hexSize={hexSize}/>
        <div>
          {map &&
            map.map((hex) => (
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
      </div>
    </div>
  );
}
