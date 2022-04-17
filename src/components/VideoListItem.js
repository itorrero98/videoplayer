const VideoListItem = (props) => {
    const { thumbnails, channelTitle, description, title } = props.videoItem;
    return (
        <div className="ui segment">
            <i src={thumbnails.default.url} alt="Video Thumbnail"></i>
            <h1>{title}</h1>
            <h3>{channelTitle}</h3>
            <p>{description}</p>
        </div>
    );
};

export default VideoListItem;
