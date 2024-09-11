import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PieChartIcon from '@mui/icons-material/PieChart';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MapIcon from '@mui/icons-material/Map';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import WidgetsIcon from '@mui/icons-material/Widgets';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExtensionIcon from '@mui/icons-material/Extension';
import SendIcon from '@mui/icons-material/Send';
import "../App.css"
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { TabScrollButton } from "@mui/material";

export const sidebarData = [
    {
        title: "Typography",
        icon: < EditIcon />,
        link: "/Typography"
    },
    {
        title: "Base",
        icon: < ExtensionIcon />,
        link: "/Base"
    },
    {
        title: "Buttons",
        icon: < SendIcon />,
        link: "/Buttons"
    },
    {
        title: "Forms",
        icon: <  ListAltIcon/>,
        link: "/Forms"
    },
    {
        title: "Icons",
        icon: < StarBorderIcon />,
        link: "/Icons"
    },
    {
        title: "Notifications",
        icon: < NotificationsIcon />,
        link: "/Notifications"
    },
    {
        title: "widgets",
        icon: < WidgetsIcon />,
        link: "/widgets"
    },
    {
        title: "Smart Table",
        icon: < CalendarViewMonthIcon />,
        link: "/Smart Table"
    },
    {
        title: "Calendar",
        icon: < CalendarMonthIcon />,
        link: "/Calendar"
    },
    {
        title: "Charts",
        icon: < PieChartIcon />,
        link: "/Charts"
    },
    {
        title: "Google Maps",
        icon: < MapIcon />,
        link: "/Google Maps"
    },
    {
        title: "Pages",
        icon: < StarBorderIcon />,
        link: "/Pages"
    },
    {
        title: "Apps",
        icon: < FormatListBulletedIcon />,
        link: "/Apps"
    }
]