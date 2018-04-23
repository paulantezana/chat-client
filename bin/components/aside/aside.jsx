import React, { Component } from "react";

import Users from "./users.jsx";

class Aside extends Component{
    render(){
        const users = [1,2];
        return(
            <aside className="aside">
                {
                    users.map((c, item) => (
                        <Users key={item}/>
                    ))
                }
            </aside>
        )
    }
}

export default Aside;
