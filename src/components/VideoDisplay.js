import React from "react";
import "../css/VideoDisplay.css";

const VideoDisplay = ({ video }) => {
    const { title, channelTitle, description } = video.snippet;
    return (
        <div className="video-display ui card">
            <div className="ui embed">
                <iframe
                    title="Video Frame"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                ></iframe>
            </div>
            <div className="content">
                <div className="header">
                    <span>{title}</span>
                </div>
                <div className="meta">
                    <span>{channelTitle}</span>
                </div>
                <div className="description">
                    <span>{description}</span>
                </div>
            </div>
        </div>
    );
};

export default VideoDisplay;
