import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import SpeedIcon from '@mui/icons-material/Speed';
import ListAltIcon from '@mui/icons-material/ListAlt';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PieChartIcon from '@mui/icons-material/PieChart';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MapIcon from '@mui/icons-material/Map';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import WidgetsIcon from '@mui/icons-material/Widgets';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExtensionIcon from '@mui/icons-material/Extension';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "../App.css"
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


export const sidebarData = [
    {
        title: "Dashboard",
        icon: < SpeedIcon />,
        button: "NEW",
        to: "/Dashboard"
    },
    {
        head: "THEME"
    },
    {
        title: "color",
        icon: < WaterDropIcon />,
        to: "/Color "
    },
    {
        title: "Typography",
        icon: < EditIcon />,
        to: "/Typography"
    },
    {
        head: "COMPONENTS"
    },
    {
        title: "Base",
        icon: < ExtensionIcon />,
        to: "/Base",
        arrow: <KeyboardArrowDownIcon />
    },
    {
        title: "Buttons",
        icon: < SendIcon />,
        to: "/Buttons",
        arrow: <KeyboardArrowDownIcon />
    },
    {
        title: "Forms",
        icon: <  ListAltIcon/>,
        to: "/Forms",
        arrow: <KeyboardArrowDownIcon />
    },
    {
        title: "Icons",
        icon: < StarBorderIcon />,
        to: "/Icons",
        arrow: <KeyboardArrowDownIcon />
    },
    {
        title: "Notifications",
        icon: < NotificationsIcon />,
        to: "/Notifications"
    },
    {
        title: "widgets",
        icon: < WidgetsIcon />,
        to: "/widgets",
        button: "NEW"
    },
    {
        title: "Smart Table",
        icon: < CalendarViewMonthIcon />,
        to: "/Smart Table",
        button: "PRO"
    },
    {
        head: "PLUGINS"
    },
    {
        title: "Calendar",
        icon: < CalendarMonthIcon />,
        to: "/Calendar",
        button: "PRO"
    },
    {
        title: "Charts",
        icon: < PieChartIcon />,
        to: "/Charts"
    },
    {
        title: "Google Maps",
        icon: < MapIcon />,
        to: "/Map",
        button: "PRO"
    },
    {
        head: "EXTRAS"
    },
    {
        title: "Pages",
        icon: < StarBorderIcon />,
        to: "/Pages",
        arrow: <KeyboardArrowDownIcon />
    },
    {
        title: "Apps",
        icon: < FormatListBulletedIcon />,
        to: "/Apps",
        arrow: <KeyboardArrowDownIcon />
    }
]