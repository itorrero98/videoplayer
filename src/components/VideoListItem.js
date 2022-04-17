const VideoListItem = (props) => {
    const { thumbnails, channelTitle, description, title } = props.videoItem;
    return (
        <div
            className="ui segment"
            onClick={() => props.onVideoSelected(props.videoItem)}
        >
            <i src={thumbnails.default.url} alt="Video Thumbnail"></i>
            <h2>{title}</h2>
            <h3>{channelTitle}</h3>
            <p>{description}</p>
        </div>
    );
};

export default VideoListItem;
