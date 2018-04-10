import React, { Component } from "react";
import chat from "./chat.scss";
import Profile from "./../media/profile.jpg";

class Chat extends Component{
    render(){
        return(
            <div className="chat">
                <div className="chat__header">
                    <div className="chat__header__item">
                        <img src={Profile} alt="" className="profile"/>
                    </div>
                    <div className="chat__header__item">
                        <div className="userName">Username</div>
                        <div className="online">Conectado</div>
                    </div>
                </div>
                <div className="chat__main">
                    <div className="chat__message">
                        <div className="chat__message__profile"><img src={Profile} alt="" className="profile"/></div>
                        <div className="chat__message__body">
                            <p>message send new message send new meee send new message for send new message on send new open message</p>
                        </div>
                        <p><span>12-17-2018</span> <span>♠</span> </p>
                    </div>
                    <div className="chat__message">
                        <div className="chat__message__item"><img src={Profile} alt="" className="profile"/></div>
                        <div className="chat__message__item">
                            <p>message send new message send new meee send new message for send new message on send new open message</p>
                            <p><span>12-17-2018</span> <span>♠</span> </p>
                        </div>
                    </div>
                    <div className="chat__message">
                        <div className="chat__message__item"><img src={Profile} alt="" className="profile"/></div>
                        <div className="chat__message__item">
                            <p>message send new message send new meee send new message for send new message on send new open message</p>
                            <p><span>12-17-2018</span> <span>♠</span> </p>
                        </div>
                    </div>
                </div>
                <div className="chat__footer">
                    <input type="text"/>
                </div>
            </div>
        )
    }
}

export default Chat;
