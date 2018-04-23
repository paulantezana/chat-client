import React, { Component } from "react";
import { Image, List } from 'semantic-ui-react';
import profile from './../media/profile.png';

class Users extends Component{
    render(){
        return(
            <List selection animated verticalAlign='middle'>
                <List.Item>
                    <Image avatar src={profile} />
                    <List.Content>
                        <List.Header>Helen</List.Header>
                        <List.Description>watching just now.</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Image avatar src={profile} />
                    <List.Content>
                        <List.Header>Christian</List.Header>
                        <List.Description>watching just now.</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Image avatar src={profile} />
                    <List.Content>
                        <List.Header>Daniel</List.Header>
                        <List.Description>watching just now.</List.Description>
                    </List.Content>
                </List.Item>
            </List>
        )
    }
}

export default Users
