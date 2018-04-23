import React, { Component } from "react";

import Header from "./partials/header.jsx";
import Chat from "./chat/chat.jsx";
import Login from "./pages/login.jsx";
import Aside from "./aside/aside.jsx";
import HomePage from "./pages/home.jsx"; 

import { Breadcrumb } from 'semantic-ui-react';

import index from './index.scss';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible: true
        }
        this.toggleAside = this.toggleAside.bind(this);
    }

    toggleAside(){
        this.setState({
            visible: !this.state.visible
        })
    }
    render(){
        return(
            <div className="grid-container">
                <div className="grid-container__menu">
                    <p>Menu izquierdo</p>
                </div>
                <div className="grid-container__header">
                    <Header/>
                </div>
                <div className="grid-container__pages">
                    <HomePage/>
                    <Chat/>
                </div>
                <div className="grid-container__aside">
                    <Aside/>
                </div>
            </div>
        )
    }
}

export default Home
