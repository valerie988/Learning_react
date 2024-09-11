import React from "react";
import Sidebar from "./components/sideBar"
import Body from "./components/body"
import "./App.css"
const App = () => {
  return (
    <div className="App">
        <Sidebar />
        <Body />
    </div>
  );
};

export default App;
