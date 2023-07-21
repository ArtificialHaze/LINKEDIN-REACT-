import React, { useEffect } from "react";
import "./App.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";

const App = () => {
  const user = "[PULLED_FROM_DB]";

  useEffect(() => {}, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
};

export default App;
