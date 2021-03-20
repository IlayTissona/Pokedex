import React from "react";

function Spinner({ on }) {
  return <div className="loader" hidden={on}></div>;
}

export default Spinner;
