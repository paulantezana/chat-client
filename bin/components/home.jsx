import React, { Component } from "react";

import Header from "./partials/header.jsx";
import Chat from "./chat/chat.jsx";
import Login from "./pages/login.jsx";

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
                    <Breadcrumb>
                        <Breadcrumb.Section link>Home</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right angle' />
                        <Breadcrumb.Section link>Store</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right angle' />
                        <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
                    </Breadcrumb>
                </div>
                <div className="grid-container__aside">
                </div>
            </div>
        )
    }
}

export default Home
