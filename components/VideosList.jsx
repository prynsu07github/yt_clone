import React from "react";
import VideoCard from "./VideoCard";

export default function Videos({ Videos }) {
  console.log(Videos);
  return (
    <div className="video-list">
      {Videos.map((video) => {
        return (
          <VideoCard
            thumbnail={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            description={video.snippet.description}
            channel={video.snippet.channelTitle}
          />
        );
      })}
    </div>
  );
}
