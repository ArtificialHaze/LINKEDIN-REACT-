import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Header = () => {
  const logOutApp = () => {};
  const user = "[PULLED_FROM_DB]";

  return (
    <div className="header">
      <div className="header__left">
        <img src="" alt="LinkedIn-Image" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title={"Home"} />
        <HeaderOptions Icon={SupervisorAccountIcon} title={"My Network"} />
        <HeaderOptions Icon={BusinessCenterIcon} title={"Jobs"} />
        <HeaderOptions Icon={ChatIcon} title={"Messaging"} />
        <HeaderOptions Icon={NotificationsIcon} title={"Notifications"} />
        <HeaderOptions
          onClick={logOutApp}
          avatar={user?.photoUrl}
          title={"Me"}
        />
      </div>
    </div>
  );
};

export default Header;
