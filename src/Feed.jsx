import React, { useEffect, useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import Post from "./Post";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const user = "[PULLED_FROM_DB]";

  useEffect(() => {}, []);

  const sendPost = (e) => {
    e.preventDefault();

    setPosts([
      "Hi there, I am trying to learn and practice some REACT features.",
      ...posts,
    ]);

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="#">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title={"Photo"} color={"#70b5f9"} Icon={ImageIcon} />
          <InputOption
            title={"Video"}
            color={"#e7a33e"}
            Icon={SubscriptionsIcon}
          />
          <InputOption title={"Event"} color={"#c0cbcd"} Icon={EventNoteIcon} />
          <InputOption
            title={"Write Article"}
            color={"#7fc15e"}
            Icon={CalendarViewDayIcon}
          />
        </div>
      </div>
      <FlipMove>
        {posts.map((post, index) => (
          <Post
            key={index}
            name={"DreamDevs"}
            description={"TestDesc is this test?"}
            message={"Hi, my name is jeff"}
            photoUrl={""}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
