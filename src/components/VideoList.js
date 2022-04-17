import VideoListItem from "./VideoListItem";

const VideoList = ({ videoItems, onLoadVideo }) => {
    const renderList = videoItems.map((item) => {
        return (
            <VideoListItem
                key={item.id.videoId}
                onVideoSelected={onLoadVideo}
                videoItem={item}
            />
        );
    });
    return <div className="ui list">{renderList}</div>;
};

export default VideoList;
