import React, { Component } from "react";
import "./init.scss";
import IMGStart from "./../media/start.jpg";

import { Link } from "react-router-dom";
const Init = ()=>(
    <div className="welcome">
        <div className="welcome__img">
            <img src={IMGStart} alt=""/>
        </div>
        <div className="welcome__content">
            <h1>Bienvenido a la revolución</h1>
            <Link to="/app" className="start-app">Ingresar</Link>
        </div>
    </div>
);
export default Init;
