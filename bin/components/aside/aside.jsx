import React, { Component } from "react";

import Users from "./users.jsx";

class Aside extends Component{
    render(){
        return(
            <aside className="aside">
                <Users/>
            </aside>
        )
    }
}
