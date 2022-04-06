import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="data:image/jpeg;base64,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" alt="" />
        <Avatar
          className="sidebar__avatar"
          src="https://media-exp1.licdn.com/dms/image/C5603AQE1AHiHmVO46A/profile-displayphoto-shrink_100_100/0/1621942211165?e=1654732800&v=beta&t=Ve79MZJTuv3XnVWQ85o8Nb1X32p7TLUwo8tmVqAeJOY"
        />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,532</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,446</p>
        </div>
      </div>

      <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem('reactJs')}
          {recentItem('linkedin clone')}
          {recentItem('prpgramming')}
          {recentItem('software')}
          {recentItem('engineering')}
          {recentItem('developer')}
      </div>
    </div>
  );
}

export default Sidebar;
