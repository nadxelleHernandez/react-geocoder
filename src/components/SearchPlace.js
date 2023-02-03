import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchPlace = ({ onSubmitChange }) => {
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmitForm");

    onSubmitChange(searchValue);
  };

  return (
    <form>
      <input
        name="searchInput"
        value={searchValue}
        onChange={onSearchChange}
      ></input>
      <input type="submit" value="Search now!" onSubmit={onFormSubmit}></input>
    </form>
  );
};

SearchPlace.propTypes = {
  onSubmitChange: PropTypes.func.isRequired,
};

export default SearchPlace;
