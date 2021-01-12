import React from "react";

export function SearchBar({ term, handleSearch }) {
  return (
    <React.Fragment>
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        onChange={handleSearch}
      />
    </React.Fragment>
  );
}
