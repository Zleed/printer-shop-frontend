import React, {useContext} from 'react';
import './resources/style/App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './resources/style/animation.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Header from "./component/templates/Header";
import {Carousel} from "react-responsive-carousel";
import HomePage from "./component/page/HomePage";
import ProductCard from "./component/product/ProductCard";
import Footer from "./component/templates/Footer";
import {AppContext} from "./context/AppContext";


function App() {

    const {page} = useContext(AppContext);

    const settings = {
        showThumbs: false,
        selectedItem: page,
        showStatus: false,
        dynamicHeight: true,
    }

    return (
        <BrowserRouter>
            <Switch>
                    <div className="App FadeIn">
                        <Header/>
                        <div className="Page FadeIn">
                            <Carousel {...settings}>
                                <div>
                                    <HomePage/>
                                </div>
                                <div>
                                    <ProductCard/>
                                </div>
                                <div>
                                    <ProductCard/>
                                    <ProductCard/>
                                </div>
                            </Carousel>
                        </div>
                        <Footer/>
                    </div>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
