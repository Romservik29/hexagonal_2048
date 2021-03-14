import {addCeelsOnMap, notEmptyCeels} from "../app/mapGenerator";
import {Hex} from "./Hex";
import {useEffect, useState} from "react";
import axios from "axios";
import {Container} from "./Container";
import {steps} from "../app/move";

export default function Grid(props) {
  useEffect(() => {
    document.addEventListener("keypress", onKeypress);
    return () => {
      document.removeEventListener("keypress", onKeypress);
    };
  }, [props.map]);

  const onKeypress = (e) => {
    let newMap = props.map;
    switch (e.key.toLowerCase()) {
      case "w": {
        console.log("w");
        newMap = steps(newMap, "upX");
        axios
          .post(`http://localhost:13337/${props.radius}`, notEmptyCeels(newMap))
          .then((res) => {
            props.setMap([...addCeelsOnMap(newMap, res.data)]);
          });

        break;
      }
      case "s": {
        console.log("s");
        newMap = steps(newMap, "downX");
        axios
          .post(`http://localhost:13337/${props.radius}`, notEmptyCeels(newMap))
          .then((res) => {
            props.setMap([...addCeelsOnMap(newMap, res.data)]);
          });
        break;
      }
      case "e": {
        console.log("e");
        newMap = steps(newMap, "upY", props.radius);
        axios
          .post(`http://localhost:13337/${props.radius}`, notEmptyCeels(newMap))
          .then((res) => {
            props.setMap([...addCeelsOnMap(newMap, res.data)]);
          });
        break;
      }
      case "q": {
        console.log("q");
        newMap = steps(newMap, "upZ", props.radius);
        axios
          .post(`http://localhost:13337/${props.radius}`, notEmptyCeels(newMap))
          .then((res) => {
            props.setMap([...addCeelsOnMap(newMap, res.data)]);
          });
        break;
      }
      case "d": {
        console.log("q");
        newMap = steps(newMap, "downZ", props.radius);
        axios
          .post(`http://localhost:13337/${props.radius}`, notEmptyCeels(newMap))
          .then((res) => {
            props.setMap([...addCeelsOnMap(newMap, res.data)]);
          });
        break;
      }
      case "a": {
        console.log("e");
        newMap = steps(newMap, "downY", props.radius);
        axios
          .post(`http://localhost:13337/${props.radius}`, notEmptyCeels(newMap))
          .then((res) => {
            props.setMap([...addCeelsOnMap(newMap, res.data)]);
          });
        break;
      }
      default:
        return;
    }
  };

  return (
    <div>
      {console.log(props.map)}

      <Container>
        {props.map.map((arr) => (
          <div>
            {arr.map((arr) => (
              <Hex
                data-value={arr.value}
                data-x={arr.x}
                data-y={arr.y}
                data-z={arr.z}
                key={Math.random(123)}
              >
                <div>
                  {arr.x + ","}
                  {arr.y + ","}
                  {arr.z + ", "}
                  <div>{arr.value}</div>
                </div>
              </Hex>
            ))}
          </div>
        ))}
      </Container>
    </div>
  );
}
