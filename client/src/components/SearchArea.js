import React from "react";

function SearchArea(props) {
  return (
    <div className="searchArea">
      <input />
      <button onClick={props.search}>Search</button>
    </div>
  );
}

export default SearchArea;
