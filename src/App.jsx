import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./component/page/HomePage";
import NavBar from "./component/navbar/NavBar";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
