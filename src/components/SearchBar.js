import React, { useState } from "react";
import "../css/SearchBar.css";

const SearchBar = ({ onSubmit, searchPlaceholder }) => {
    const [searchValue, setSearchValue] = useState("");

    const onSubmitSearch = (evt) => {
        evt.preventDefault();
        onSubmit(searchValue);
    };

    return (
        <div className="search-bar ui container">
            <form className="ui form" onSubmit={onSubmitSearch}>
                <div className="field">
                    <label htmlFor="search">Search</label>
                    <input
                        name="search"
                        type="text"
                        placeholder={
                            searchPlaceholder ? searchPlaceholder : "Search..."
                        }
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
