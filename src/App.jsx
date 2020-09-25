import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./component/page/HomePage";
import NavBar from "./component/navbar/NavBar";
import ProductCard from "./component/product/ProductCard";
import Header from "./component/templates/Header";
import Footer from "./component/templates/Footer";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <div className="App">
                    <Header/>
                    <div className="Page">
                        <Route path="/" exact component={HomePage}/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                    <Footer/>
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
