import React from "react";
import CountUp from "react-countup";

import "./Statistics.scss";

// Will make this more dynamic
function Statistics() {
  return (
    <div className="statistics">
      <div className="statistics__counter statistics__counter--1">
        <CountUp end={847} className="count" duration={3} />

        <p className="text__main">Project Done</p>
      </div>
      <div className="statistics__counter statistics__counter--2">
        <CountUp end={416} className="count" duration={8} />
        <p className="text__main">Happy Clients</p>
      </div>
      <div className="statistics__counter statistics__counter--3">
        <CountUp end={393} className="count" duration={5} />
        <p className="text__main">Running Projects</p>
      </div>
    </div>
  );
}

export default Statistics;
