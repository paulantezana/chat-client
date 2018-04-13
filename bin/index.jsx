import index from "./scss/index.scss";

import React from 'react';
import ReactDOM from 'react-dom';

// style libraries

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

fetch("http://localhost:7070/login",{
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: "anita",
        pass:"123"
    })
})
.then((Response) => {
    console.log(Response.json())
})
.then((data) =>  console.log(data))
.catch((err)=>console.log(err));


const APYKEY = "secret";

const getConnection = () => {
    const ts = Date.now;
    ts
}









import App from "./components/index.jsx"

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
