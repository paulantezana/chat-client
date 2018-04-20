import React, { Component } from "react";
import { Button, Form, Icon, Input, Divider, Message } from 'semantic-ui-react';
import login from "./login.scss";
import { runInThisContext } from "vm";

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            args: {}
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, input){
        const args = this.state.args;
        args[input.name] = input.value;
        this.setState({args});
    }

    onSubmit(e){
        e.preventDefault();
    }


    render(){
        return(
            <div className="block block-login">
                <h1 className="text-center">LOGIN</h1>

                <Message negative>
                    <Message.Header>Error</Message.Header>
                    <p>Nombre de usuario o contraseña incorrecta</p>
                </Message>

                <Form onSubmit={this.onSubmit}>

                    <Form.Field>
                        <Input
                            placeholder='Nombre de usuario'
                            name="username"
                            onChange={this.handleChange}
                            icon={<Icon name='close'/>}  />
                    </Form.Field>

                    <Form.Field>
                        <Input
                            placeholder='Contraseña'
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            icon={<Icon color='green' name='check'/>} />
                    </Form.Field>

                    <Button
                        disabled={!this.state.args.username || !this.state.args.password}
                        type='submit' color='primary' fluid>Ingresar</Button>

                </Form>

                <Divider horizontal>O</Divider>

                <a href="" className="text-center">olvido su contraseña</a>

            </div>
        )
    }
}

export default Login;
