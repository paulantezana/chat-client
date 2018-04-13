import React, { Component } from "react";
import { Button, Checkbox, Form, Input, Label } from 'semantic-ui-react';
import login from "./login.scss";
import { runInThisContext } from "vm";

class Login extends Component{

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
            <div className="login-container">
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <Input icon='user' iconPosition='left' placeholder='Nombre de usuario' />
                    </Form.Field>
                    <Form.Field>
                        <Input icon='user' iconPosition='left' placeholder='Contraseña' type="password" />
                    </Form.Field>
                    <Button.Group>
                        <Button type="reset">Cancelar</Button>
                        <Button.Or text='O'/>
                        <Button type='submit' color="positive">enviar</Button>
                    </Button.Group>
                </Form>
                <a href="">olvido su contraseña</a>
            </div>
        )
    }
}

export default Login;
