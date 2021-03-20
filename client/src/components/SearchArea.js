import React, { useState } from "react";
import Suggestion from "./Suggestion";

function SearchArea(props) {
  const [value, setValue] = useState("");

  return (
    <div className="searchArea">
      <input
        onChange={(e) => {
          setValue(e.target.value);
          props.searchSuggestions(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.search(value);
        }}
      >
        Search
      </button>
      <div id="searchSuggestions">
        {" "}
        {props.suggestions.map((suggestion) => {
          return <Suggestion pokemoname={suggestion} />;
        })}{" "}
      </div>
    </div>
  );
}

export default SearchArea;
