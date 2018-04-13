import React, { Component } from "react";
import { Button, Checkbox, Form, Input, Label } from 'semantic-ui-react';
import login from "./login.scss";

class Login extends Component{
    render(){
        return(
            <div className="login-container">
                <Form>
                    <Form.Field>
                        <Input icon='user' iconPosition='left' placeholder='Nombre de usuario' />
                    </Form.Field>
                    <Form.Field>
                        <Input icon='user' iconPosition='left' placeholder='Contraseña' type="password" />
                    </Form.Field>
                    <Button.Group>
                        <Button>Salir</Button>
                        <Button.Or text='O'/>
                        <Button positive>Login</Button>
                    </Button.Group>
                </Form>
                <a href="">olvido su contraseña</a>
            </div>
        )
    }
}

export default Login;