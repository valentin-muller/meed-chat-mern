import React from "react";
import "./Sidebar.css";

import { Avatar, IconButton } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://media-exp1.licdn.com/dms/image/C5635AQHCxBRLfeMCaQ/profile-framedphoto-shrink_400_400/0?e=1599814800&v=beta&t=ZuczP3ACpquQkfUBAxTh0vQzzEV1_BCLdxt4WW296r0" />
        <div className="sidebar__headerRight">
          <IconButton>
            <ChatBubbleOutlineIcon />
          </IconButton>

          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat
          roomName={"Sonny"}
          lastMessage={"Not much happen..."}
          url={
            "https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
          }
        />
        <SidebarChat
          roomName={"Steve"}
          lastMessage={"This is unacceptable!"}
          url={
            "https://www.pioneeringminds.com/wp-content/uploads/2018/10/Steve-Jobs-1440x960.jpg"
          }
        />
      </div>
    </div>
  );
}

export default Sidebar;
