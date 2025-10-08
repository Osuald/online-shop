import React from "react";

const SearchBox = (props) => {
  return (
    <div className="flex gap-2">
      <input
        className="border-1 rounded-lg p-2"
        id="search"
        type="text"
        placeholder="Search Products"
        onChange={props.onChange}
      />
      <button className="border-2 p-2 rounded-lg bg-gray-800 hover:bg-gray-500 cursor-pointer">
        Search
      </button>
    </div>
  );
};

export default SearchBox;
