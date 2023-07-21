import { Avatar } from "@material-ui/core";
import React from "react";

const HeaderOptions = ({ title, Icon, avatar, onClick }) => {
  return (
    <div onClick={onClick} className="headerOptions">
      {Icon && <Icon className="headerOptions__icon" />}
      {avatar && <Avatar className="headerOptions__icon" src={avatar} />}
      <h3 className="headerOptions__title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
