import React from "react";
import { Link } from "react-router-dom";
import VideoCardContent from "./VideoCardContent";

export default function VideoCard({ thumbnail, title, description, channel }) {
  return (
    <div
      className="video-card"
      style={{
        width: "320px",
        height: "280px",
        background:
          "linear-gradient(108deg, rgba(50,45,45,1) 0%, rgba(2,14,20,1) 100%)"
      }}
    >
      <Link to="">
        <img src={thumbnail} alt="video" />
      </Link>
      <VideoCardContent
        title={title}
        description={description}
        channel={channel}
      />
    </div>
  );
}
