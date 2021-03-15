import {addCeelsOnMap, notEmptyCeels} from "../app/mapGenerator";
import {useEffect, useState} from "react";
import axios from "axios";
import {Container} from "./Container";
import {steps} from "../app/move";
import "../App.css";
import {gameover} from "../app/game_over";
import {isMove, isMoveX} from "../app/isMove";

export default function Grid(props) {
  useEffect(() => {
    document.addEventListener("keypress", onKeypress);
    return () => {
      document.removeEventListener("keypress", onKeypress);
    };
  }, [props.map]);
  const move = (newMap) => {
    return axios
      .post(`${props.url}${props.radius}`, notEmptyCeels(newMap))
      .then((res) => {
        newMap = [...addCeelsOnMap(newMap, res.data)];
        props.setIsGameOver(gameover(newMap));
        props.setMap(newMap);
      });
  };

  const onKeypress = (e) => {
    let newMap = props.map;
    props.setIsGameOver(gameover(newMap));
    switch (e.code) {
      case "KeyW": {
        if (isMoveX(newMap)) {
          newMap = steps(newMap, "upX");
          move(newMap);
        } //if have move do move and retrive new hex
        break;
      }
      case "KeyS": {
        if (isMoveX(newMap, "down")) {
          newMap = steps(newMap, "downX");
          move(newMap);
        }
        break;
      }
      case "KeyE": {
        if (isMove(newMap, "y")) {
          newMap = steps(newMap, "upY", props.radius);
          move(newMap);
        }
        break;
      }
      case "KeyQ": {
        if (isMove(newMap, "z", "down")) {
          newMap = steps(newMap, "upZ", props.radius);
          move(newMap);
        }
        break;
      }
      case "KeyD": {
        if (isMove(newMap, "z")) {
          newMap = steps(newMap, "downZ", props.radius);
          move(newMap);
        }
        break;
      }
      case "KeyA": {
        if (isMove(newMap, "y", "down")) {
          newMap = steps(newMap, "downY", props.radius);
          move(newMap);
        }
        break;
      }
      default:
        return;
    }
  };

  return (
    <div>
      <Container>
        {props.map.map((arr) => (
          <div>
            {arr.map((arr) => (
              <div
                className="hex"
                data-value={arr.value}
                data-x={arr.x}
                data-y={arr.y}
                data-z={arr.z}
                key={Math.random(123)}
              >
                <div>{arr.value !== 0 ? arr.value : null}</div>
              </div>
            ))}
          </div>
        ))}
      </Container>
    </div>
  );
}
