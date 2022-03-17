import React from "react";
import { Avatar } from "@material-ui/core";
import './VideoCard.css';

function VideoCard({ image, title, channel, views, timestamp, channelArt }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar className="videoCard__avatar" alt={channel} src={channelArt}/>
        <div className="videoCard__text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
                {views} • {timestamp}
            </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
