import React, { Component } from "react";
import { Input } from 'semantic-ui-react';

class Header extends Component{
    render(){
        return(
            <div className="sn-container">
                <Input
                    icon={{ name: 'search', circular: true, link: true }}
                    placeholder='Search...'
                />
            </div>
        )
    }
}

export default Header
