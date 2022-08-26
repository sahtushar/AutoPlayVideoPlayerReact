import "./styles.css";
import React, { useState } from "react";

const VideoCard = ({ data }) => {
  const [onHover, setOnHover] = useState(false);
  const VideoPlayer = () => {
    return (
      <div className="videoplayerpopup" id={data.personalization_id}>
        <h2 style={{ color: "black" }}>{data.personalization_id}</h2>
        <video width="400px" autoPlay muted controls>
          <source src={data.video_url} type="video/mp4" />
        </video>
      </div>
    );
  };
  return (
    <div
      onMouseOver={() => {
        console.log("here1");
        setOnHover(true);
      }}
      id={data.personalization_id}
      onMouseLeave={() => {
        console.log("here2");
        setOnHover(false);
      }}
      style={{
        width: "200px",
        height: "200px",
        border: "1px solid black",
        background: `url(${data.thumbnail_url})`,
        backgroundPosition: "center",
        margin: "10px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div style={{ width: "100%" }}>{onHover && <VideoPlayer />}</div>
    </div>
  );
};

export default VideoCard;
