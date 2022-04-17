import React from "react";

class SearchBar extends React.Component {
    state = { searchValue: "" };

    onSubmitSearch = (evt) => {
        evt.preventDefault();
        this.props.onSubmit(this.state.searchValue);
    };
    render() {
        return (
            <div className="search-bar">
                <form className="ui form" onSubmit={this.onSubmitSearch}>
                    <div className="field">
                        <label htmlFor="search"> Search</label>
                        <input
                            name="search"
                            type="text"
                            placeholder="Search..."
                            value={this.state.searchValue}
                            onChange={(e) =>
                                this.setState({ searchValue: e.target.value })
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
