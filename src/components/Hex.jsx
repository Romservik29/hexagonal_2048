import React from "react";

export default function Hex(props) {
  return (
    <div
      className="hex"
      style={{
        left: props.hexSize * (3/2 * (props.x))+200,
        top: props.hexSize * ((Math.sqrt(3)/2)*props.x+(Math.sqrt(3)*props.z))+200,
      }}
      data-value={props.value}
      data-x={props.x}
      data-y={props.y}
      data-z={props.z}
    >
      <div>{props.value !== 0 ? props.value : null}</div>
    </div>
  );
}
