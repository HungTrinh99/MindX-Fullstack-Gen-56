import React, { useState } from "react";
import Button from "../Button";

const SearchUser = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onSearchUser(searchValue);
    setSearchValue("");
  };

  const { hasClearButton, onClearUser } = props;
  return (
    <div className="search-user-container">
      <form onSubmit={onSubmitHandler}>
        <div>
          <input
            name="keyword"
            value={searchValue}
            onChange={onChangeHandler}
            className="search-input"
            placeholder="Enter keyword that you want to search..."
          />
        </div>
        <Button
          label="Search"
          buttonType="secondary"
          fullWidth={true}
          type="submit"
          className="mb-2"
        />
        {hasClearButton && (
          <Button
            label="Clear users"
            buttonType="primary"
            type="button"
            fullWidth={true}
            onClick={() => onClearUser()}
          />
        )}
      </form>
    </div>
  );
};

export default SearchUser;
