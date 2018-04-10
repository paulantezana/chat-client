import React, { Component } from "react";

import Header from "./partials/header.jsx";
import Chat from "./chat/chat.jsx";

class App extends Component{
    render(){
        return(
            <div className="layout-container">
                <div className="main-menu-container">
                    <p>Menu izquierdo</p>
                </div>
                <div className="main-container">
                    <div className="main-header-container">
                        <Header/>
                    </div>
                    <div className="main-content">
                        <div className="main-pages-container">
                            <Chat/>
                        </div>
                        <div className="main-aside-container"><p>chat usuarios</p></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App