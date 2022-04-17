import React from "react";
import SearchBar from "./components/SearchBar";
import VideoListItem from "./components/VideoListItem";
import youtube from "./api/youtube";

class App extends React.Component {
    onSearchSubmit = async (search) => {
        const response = await youtube.get("/search", {
            params: { q: search },
        });

        console.log(response);
    };
    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <VideoListItem />
                <VideoListItem />
                <VideoListItem />
            </div>
        );
    }
}

export default App;
