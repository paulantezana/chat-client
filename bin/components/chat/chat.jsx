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
                    <div className="chat__message send">
                        <div className="chat__message__content">
                            <div className="chat__message__body">
                                message send new message send new meee send new message for send new message on send new open message
                            </div>
                            <div><span className="chat__message__date">12-17-2018</span> <span className="chat__message__read">♠</span> </div>
                        </div>
                    </div>
                    <div className="chat__message recipient">
                        <div className="chat__message__profile"><img src={Profile} alt="" className="profile"/></div>
                        <div className="chat__message__content">
                            <div className="chat__message__body">
                                message send new message 
                            </div>
                            <div><span className="chat__message__date">12-17-2018</span> <span className="chat__message__read">♠</span> </div>
                        </div>
                    </div>
                    <div className="chat__message send">
                        <div className="chat__message__content">
                            <div className="chat__message__body">
                                message send new message send new meee send new message for send new message on send new open message
                            </div>
                            <div><span className="chat__message__date">12-17-2018</span> <span className="chat__message__read">♠</span> </div>
                        </div>
                    </div>
                </div>
                <div className="chat__footer">
                    <form action="">
                        <input type="text" placeholder="Escribe un mensaje..." name="message"/>
                        <input type="submit" value="enviar"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Chat;
