import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn news</h2>
        <InfoIcon />
      </div>
      {newsArticle("DreamDevs-React", "Top news - 3,333 Readers")}
      {newsArticle("Tesla", "Top news - 2,443 Readers")}
      {newsArticle("Twitter", "Top news - 1,334 Readers")}
    </div>
  );
};

export default Widgets;
