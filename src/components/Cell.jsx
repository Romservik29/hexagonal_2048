import React from "react";
import styled from "styled-components";
import {color} from "../app/color";

export default function Cell({x, z, hexSize, value}) {

  return (
    <Hex
      style={{
        left: hexSize * ((3 / 2) * x) + 200,
        top: hexSize * ((Math.sqrt(3) / 2) * x + Math.sqrt(3) * z) + 200,
      }}
    >
      <svg
        id="0.4888067125480031"
        height="173.20508075688772"
        width="200"
        fill="none"
        viewBox="0 0 190 164"
      >
        <path
          id="0.4888067125480031"
          d="M47.3255 163.2L0 81.836L46.3707 0H142.802L190 82.3093L143.757 163.2H47.3255Z"
          fill={color[value]}
        ></path>
      </svg>
      <HexValue>{value}</HexValue>
    </Hex>
  );
}

const Hex = styled.div`
  width: 200px;
  height: 173px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  //transition: left 150ms ease-out 0ms, top 150ms ease-out 0ms;
`;

const HexValue = styled.span`
  position: absolute;
  color: rgb(118, 110, 102);
  font-size: 20px;
`;
