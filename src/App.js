import React from "react";
import SearchBar from "./components/SearchBar";
import VideoListItem from "./components/VideoListItem";
import youtube from "./api/youtube";

class App extends React.Component {
    state = { videoItems: [] };
    onSearchSubmit = async (search) => {
        const response = await youtube.get("/search", {
            params: { q: search },
        });
        console.log(response);
        const videoItems = response.data.items.map((item) => {
            return (
                <VideoListItem key={item.id.videoId} videoItem={item.snippet} />
            );
        });
        this.setState({ videoItems });
    };
    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                {this.state.videoItems}
            </div>
        );
    }
}

export default App;
