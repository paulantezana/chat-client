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


import rootReducer from "./rootReducer.jsx";

const store = createStore(
    rootReducer
)



import index from './index.scss';

const Public = () => <h3>Public</h3>;


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            redirectToReferrer: false
        }
    }

    render(){
        return(
            <Provider store={store}>
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/otro">otro</Link></li>
                        </ul>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/login" component={Login} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
};

const PrivateRoute = ({ component: Component, rest }) => (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated
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

