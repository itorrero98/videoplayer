import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import VideoDisplay from "./components/VideoDisplay";
import VideoList from "./components/VideoList";
import youtube from "./api/youtube";
import "./css/App.css";

const App = () => {
    const [videoItems, setVideoItems] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);

    const onSearchSubmit = async (search) => {
        const response = await youtube.get("/search", {
            params: { q: search },
        });
        setVideoItems(response.data.items);
        setCurrentVideo(response.data.items[0]);
    };

    const onLoadVideo = (video) => {
        setCurrentVideo(video);
    };
    return (
        <div>
            <SearchBar onSubmit={onSearchSubmit} />
            {videoItems.length > 0 && (
                <div className="app-body-container">
                    {currentVideo && <VideoDisplay video={currentVideo} />}
                    <VideoList
                        onLoadVideo={onLoadVideo}
                        videoItems={videoItems}
                    />
                </div>
            )}
        </div>
    );
};

export default App;
