import React, { Component } from "react";
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

import chat from "./chat.scss";

class Chat extends Component{
    render(){
        return (
            <Widget />
        );
    }
}

export default Chat