import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    withRouter
} from "react-router-dom";

import { createStore } from 'redux';
import { Provider } from 'react-redux';


import Header from "./partials/header.jsx";
import Chat from "./chat/chat.jsx";
import Login from "./pages/login.jsx";
import Home from "./home.jsx";
import NotFound from "./error.jsx";
import Init from "./pages/init.jsx";


import rootReducer from "./rootReducer.jsx";

import { authenticate } from "./helpers/auth.jsx";

const store = createStore(
    rootReducer
)



import index from './index.scss';

const Public = () => <h3>Public</h3>;


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            loggin: false,
            redirectToReferrer: false
        }
    }

    componentDidMount(){

    }

    componentWillMount(){

    }

    render(){
        return(
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Init} />
                        <PrivateRoute exact path="/app" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

const PrivateRoute = ({ component: Component, rest }) => (
    <Route
      {...rest}
      render={props =>
        authenticate()
            ? ( <Component {...props} /> )
            : ( <Redirect to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
);

export default App

