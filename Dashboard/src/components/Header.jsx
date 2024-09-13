import React, { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import DialpadIcon from "@mui/icons-material/Dialpad";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DraftsIcon from "@mui/icons-material/Drafts";
import "../App.css";

const Header = () => {
  const [themes, setThemes] = useState(false);
  const change = () => {
    setThemes(!themes);
  };
  useEffect(() => {
    if (themes) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [themes]);

  return (
    <div className="header">
      <div className="leftIcon">
        <SearchIcon className="search" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="icons">
        <NotificationsIcon />
        <FormatListBulletedIcon />
        <DraftsIcon />
        
        <div className="light" onClick={change}>
          {themes ?  <NightlightRoundIcon /> :<LightModeIcon />}
        </div>
        <DialpadIcon />
      </div>
    </div>
  );
};

export default Header;
