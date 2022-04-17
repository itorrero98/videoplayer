import React from "react";
import "../css/VideoDisplay.css";

class VideoDisplay extends React.Component {
    render() {
        return (
            <div className="video-display ui card">
                <div className="video-responsive image">
                    <iframe
                        title="Video Frame"
                        src={this.props.videoSource}
                    ></iframe>
                </div>
                <div className="content">
                    <div className="header">
                        <span>Test Title</span>
                    </div>
                    <div className="meta">
                        <span>Sub Title</span>
                    </div>
                    <div className="description">
                        <span>Some text</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoDisplay;
