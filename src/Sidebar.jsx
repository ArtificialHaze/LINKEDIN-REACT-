import { Avatar } from "@material-ui/core";
import React from "react";

const Sidebar = () => {
  const user = "[PULLED_FROM_DB]";

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="" alt="SidebarBackground-Image" />
        <Avatar
          className="sidebar__avatar"
          src={user.photoUrl}
          alt="UserPhoto"
        />
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,333</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on a post</p>
          <p className="sidebar__statNumber">4,623</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
