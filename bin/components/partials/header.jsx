import React, { Component } from "react";
import { Button, Dropdown, Menu, Image } from 'semantic-ui-react';

class Header extends Component{
    render(){
        return(
            <Menu>
                <Menu.Menu position='right'>
                <Dropdown item text='Language'>
                    <Dropdown.Menu>
                    <Dropdown.Item>English</Dropdown.Item>
                    <Dropdown.Item>Russian</Dropdown.Item>
                    <Dropdown.Item>Spanish</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Image src='/assets/images/wireframe/square-image.png' avatar />
                <Menu.Item>
                    <Button primary>Sign Up</Button>
                </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default Header
