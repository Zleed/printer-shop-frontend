import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./component/page/HomePage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <div className="App">
                    <Route path="/" exact component={HomePage}/>
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
