import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import DialpadIcon from '@mui/icons-material/Dialpad';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DraftsIcon from '@mui/icons-material/Drafts';
import "../App.css"
const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={SearchIcon} alt="" />
        <input type="text" placeholder="Search" />
      </div>
      <div>
        <img src={NotificationsIcon} alt="" />
        <img src={FormatListBulletedIcon} alt="" />
        <img src={DraftsIcon} alt="" />
        <img src={NightlightRoundIcon} alt="" />
        <img src={DialpadIcon} alt="" />
      </div>
    </div>
  );
};

export default Header;
