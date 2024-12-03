import React, { useState } from "react";

function Block(props) {
  const [hover, setHover] = useState({
    box: false,
    svg: false
  });

  const customStyle = {
    backgroundColor: props.task.color,
    backgroundImage:
      "url(/images/" +
      props.task.img +
      ")"
  };

  return (
    <div style={customStyle} className="parent-box">
      <div
        onMouseOver={() => {
          setHover((prev) => {
            return { ...prev, box: true };
          });
        }}
        onMouseOut={() => {
          setHover((prev) => {
            return { ...prev, box: false };
          });
        }}
        className="child-box"
        style={
          hover.box && hover.svg
            ? {}
            : hover.box
            ? { backgroundColor: "#34397b" }
            : {}
        }
      >
        <div className="container">
          <div className="top">
            <h3>{props.task.title}</h3>
            
          </div>
          <div className="bottom">
            <h1>{props.task.timeframes[props.time].current} hrs</h1>
            <p>
              Last{" "}
              {props.time === "daily"
                ? "Day"
                : props.time === "weekly"
                ? "Week"
                : "Month"}{" "}
              - {props.task.timeframes[props.time].previous}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Block;