import "../css/VideoListItem.css";

const VideoListItem = (props) => {
    const { thumbnails, description, title } = props.videoItem.snippet;
    return (
        <div
            className="video-item item"
            onClick={() => props.onVideoSelected(props.videoItem)}
        >
            <img
                className="ui image"
                src={thumbnails.medium.url}
                alt={title}
            ></img>
            <div className="content">
                <div href="/" className="header">
                    {title}
                </div>

                <p>{description}</p>
            </div>
        </div>
    );
};

export default VideoListItem;
