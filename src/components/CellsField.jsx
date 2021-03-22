import React from "react";
import Cell from "./Cell";

export default function CellsField() {
  const cells = [1, 2, 3];
    
  return (
    <div style={{position: "absolute", width: 500}}>
      {cells.map( (cell) => <Cell key={cell+"12"} style={{position: 'absolute', left: cell *100, top: cell*100}}/>)}
    </div>
  );
}
