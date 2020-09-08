import React from "react";
import "./Sidebar.css";

import {Avatar, IconButton} from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
      <Avatar src="" />
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
    </div>
  );
}

export default Sidebar;
