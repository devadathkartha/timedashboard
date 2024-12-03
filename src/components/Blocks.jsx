import React from "react";
import Block from "./Block";

function Blocks(props) {
  return (
    <div className="table">
      {props.blocks.map((item, index) => {
        return <Block key={index} task={item} time={props.time} />;
      })}
    </div>
  );
}

export default Blocks;