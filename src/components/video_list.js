import React from  'react';
import VideoListItem from './video_list_item';
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );
    });
    // react recognises var videoItems is list or array
    return ( // className == css class, renamed to avoid conflict with ES6 class
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;