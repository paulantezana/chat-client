import React, { Component } from "react";
import { Button, Dropdown, Menu, Image } from 'semantic-ui-react';
import profile from "./../media/profile.png";
import './header.scss';

class Header extends Component{
    render(){
        return(
            <Menu secondary>
                <Menu.Menu>
                    <Menu.Item
                        icon='sidebar'/>
                </Menu.Menu>
                <Menu.Menu position='right'>
                    <Image src={profile} avatar/>
                    <Dropdown item text='User Name' pointing>
                        <Dropdown.Menu>
                            <Dropdown.Item icon='user' text='Cuenta' />
                            <Dropdown.Item icon='discussions' text='Inbox' />
                            <Dropdown.Item icon='settings' text='Configuración' />
                            <Dropdown.Item icon='sign out' text='Salir' />
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item icon="bars"/>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default Header
