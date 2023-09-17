import React from "react";
import { CheckCircle } from "phosphor-react";

export default function VideoCardContent({ title, description, channel }) {
  return (
    <div style={{ padding: "10px 10px" }}>
      <p style={{ fontSize: "15px" }}>{title.substring(0, 100)}</p>
      <div
        className="channel-name"
        style={{
          display: "flex",
          gap: "4px",
          opacity: "0.4",
          fontSize: "14px",
          marginTop: "5px"
        }}
      >
        <p>{channel}</p>
        <CheckCircle size={15} />
      </div>
    </div>
  );
}
