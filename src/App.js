import React from "react";
import SearchBar from "./components/SearchBar";
import VideoDisplay from "./components/VideoDisplay";
import VideoList from "./components/VideoList";

import youtube from "./api/youtube";
import "./css/App.css";

class App extends React.Component {
    state = { videoItems: [], currentVideo: null };
    onSearchSubmit = async (search) => {
        const response = await youtube.get("/search", {
            params: { q: search },
        });

        this.setState({
            videoItems: response.data.items,
            currentVideo: response.data.items[0],
        });
    };

    onLoadVideo = (video) => {
        this.setState({ currentVideo: video });
    };

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit} />
                {this.state.videoItems.length > 0 && (
                    <div className="app-body-container">
                        {this.state.currentVideo && (
                            <VideoDisplay video={this.state.currentVideo} />
                        )}
                        <VideoList
                            onLoadVideo={this.onLoadVideo}
                            videoItems={this.state.videoItems}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default App;
