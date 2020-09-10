import { Avatar } from "@material-ui/core"
import React from 'react'
import "./SidebarChat.css"

function SidebarChat({roomName, lastMessage, url}) {
    return (
        <div className="sidebarChat">
            <Avatar src={url} />
            <div className="sidebarChat__info">
                <h2>{roomName}</h2>
                <p>{lastMessage}</p>
            </div>
        </div>
    )
}

export default SidebarChat
