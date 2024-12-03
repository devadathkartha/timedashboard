import React from "react";

function Person(props) {
  function handleClick(event) {
    const { id } = event.target;
    props.setTime(id);
  }

  return (
    <div className="parent-person">
      <div className="child-person">
        <div className="container-person">
          <img src={props.img} alt="Jeremy" />
          <div className="title">
            <p>Report For</p>
            <h1>{props.nameOfPerson}</h1>
          </div>
        </div>
      </div>
      <div className="selectors">
        <button
          className={props.time === "daily" ? "selector active" : "selector"}
          id="daily"
          onClick={handleClick}
        >
          Daily
        </button>
        <button
          className={props.time === "weekly" ? "selector active" : "selector"}
          id="weekly"
          onClick={handleClick}
        >
          Weekly
        </button>
        <button
          className={props.time === "monthly" ? "selector active" : "selector"}
          id="monthly"
          onClick={handleClick}
        >
          Monthly
        </button>
      </div>
    </div>
  );
}

export default Person;