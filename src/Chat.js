import { Avatar, IconButton } from "@material-ui/core";
import React, {useState} from "react";
import "./Chat.css";
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from './axios';

function Chat( {messages} ) {

  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

   await axios.post('/messages/new', {
      message: input,
      name: "Valentin",
      timestamp: new Date().toUTCString(),
      received: true, 
    });

    setInput('');
  }


  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4" />

        <div className="chat__headerInfo">
          <h3>Sonny</h3>
          <p>Last seen today at 10:22 </p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className="chat__message chat__receiver">
          <span className="chat__name">Valentin</span>
          Hey Buddy! How is it going?
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message">
          <span className="chat__name">Sonny</span>
          Not much happening dude, are you still up for tonight?
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        {messages.map((message) => (
          <p
            className={`chat__message ${message.received && "chat__receiver"}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            placeholder="Type a message"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
