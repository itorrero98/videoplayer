import React from "react";
import SearchBar from "./components/SearchBar";
import VideoDisplay from "./components/VideoDisplay";
import VideoList from "./components/VideoList";
import VideoListItem from "./components/VideoListItem";
import youtube from "./api/youtube";
import "./css/App.css";

class App extends React.Component {
    state = { videoItems: [], currentVideo: {} };
    onSearchSubmit = async (search) => {
        const response = await youtube.get("/search", {
            params: { q: search },
        });
        const videoItems = response.data.items.map((item) => {
            return (
                <VideoListItem
                    key={item.id.videoId}
                    onVideoSelected={this.onLoadVideo}
                    videoItem={item.snippet}
                />
            );
        });
        this.setState({ videoItems });
    };

    onLoadVideo = (video) => {
        console.log(video);
        //this.setState({ currentVideo: video });
    };

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit} />
                {this.state.videoItems.length > 0 && (
                    <div className="app-body-container">
                        <VideoDisplay video={this.state.currentVideo} />
                        <VideoList>{this.state.videoItems}</VideoList>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
