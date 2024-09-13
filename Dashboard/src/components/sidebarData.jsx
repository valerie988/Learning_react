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
        
        button: "NEW"
    },
    {
        title: "color",
        icon: < WaterDropIcon />,
        link: "/color"
    },
    {
        title: "Typography",
        icon: < EditIcon />,
        link: "/Typography"
    },
    {
        title: "Base",
        icon: < ExtensionIcon />,
        link: "/Base",
        arrow: <KeyboardArrowDownIcon />
    },
    {
        title: "Buttons",
        icon: < SendIcon />,
        link: "/Buttons",
        arrow: <KeyboardArrowDownIcon />
    },
    {
        title: "Forms",
        icon: <  ListAltIcon/>,
        link: "/Forms",
        arrow: <KeyboardArrowDownIcon />
    },
    {
        title: "Icons",
        icon: < StarBorderIcon />,
        link: "/Icons",
        arrow: <KeyboardArrowDownIcon />
    },
    {
        title: "Notifications",
        icon: < NotificationsIcon />,
        link: "/Notifications"
    },
    {
        title: "widgets",
        icon: < WidgetsIcon />,
        link: "/widgets",
        button: "NEW"
    },
    {
        title: "Smart Table",
        icon: < CalendarViewMonthIcon />,
        link: "/Smart Table",
        button: "PRO"
    },
    {
        title: "Calendar",
        icon: < CalendarMonthIcon />,
        link: "/Calendar",
        button: "PRO"
    },
    {
        title: "Charts",
        icon: < PieChartIcon />,
        link: "/Charts"
    },
    {
        title: "Google Maps",
        icon: < MapIcon />,
        link: "/Google Maps",
        button: "PRO"
    },
    {
        title: "Pages",
        icon: < StarBorderIcon />,
        link: "/Pages",
        arrow: <KeyboardArrowDownIcon />
    },
    {
        title: "Apps",
        icon: < FormatListBulletedIcon />,
        link: "/Apps",
        arrow: <KeyboardArrowDownIcon />
    }
]