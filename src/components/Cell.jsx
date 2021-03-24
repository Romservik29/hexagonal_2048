import React from "react";
import styled from "styled-components";
import {color} from "./color";

export default function Cell({key, x, z, hexSize, value}) {
  const Hex = styled.div`
    position: absolute;
    left: ${hexSize * ((3 / 2) * x) + 200}px;
    top: ${hexSize * ((Math.sqrt(3) / 2) * x + Math.sqrt(3) * z) + 200}px;
    transition: left 2s, top 2s;
  `;
  return (
    <Hex key={key}>
      <HexValue>{value}</HexValue>
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
    </Hex>
  );
}

const HexValue = styled.div`
  position: absolute;
  font-weight: 1000;
  font-size: 20pt;
  top: 40%;
  left: 45%;
`;
