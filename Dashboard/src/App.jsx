import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import sideBar from "./components/sideBar"


const App = () => {
  return (
    <div>
        <Header />
          <a path="/sideBar" element={<sideBar />} />
        <Footer />
    </div>
  );
};

export default App;
