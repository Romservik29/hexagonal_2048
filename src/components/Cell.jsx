import React from "react";
import {animated, useSpring} from "react-spring";
import Hex from "../innerHex.svg";
export default function Cell({key}) {
  const props = useSpring({
    immediate: true,
    from: {transform: "scale(0.8)"},
    to: [{transform: "scale(1.2)"}, {transform: "scale(1)"}],
    config: {duration: 100},
  });
  return <animated.div width="100px" key={key} style={props}>

</animated.div>;
}
