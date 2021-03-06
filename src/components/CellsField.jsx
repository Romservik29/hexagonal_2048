import React, {useMemo, useState} from "react";
import Cell from "./Cell";

export default function CellsField({map,hexSize}) {
  const [cells, setSells] = useState([]);
  useMemo(() => setSells(map.filter((cell) => cell.value !== 0)), [map]);

  return (
    <div>
      {cells.map((cell,index) => (
        <Cell key={index} hexSize={hexSize} value={cell.value} x={cell.x} z={cell.z} />
      ))}
    </div>
  );
}
