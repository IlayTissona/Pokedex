import React, { useState } from "react";

function SearchArea(props) {
  const [value, setValue] = useState("");

  return (
    <div className="searchArea">
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.search(value);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchArea;
