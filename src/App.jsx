import React, {useContext} from 'react';
import './resources/style/App.css';
import './resources/style/animation.css'
import './resources/style/component/carousel.min.css'
import Header from "./component/templates/Header";
import {Carousel} from "react-responsive-carousel";
import SliderPage from "./component/page/SliderPage";
import Footer from "./component/templates/Footer";
import {AppContext} from "./context/AppContext";
import StorePage from "./component/page/StorePage";
import HomePage from "./component/page/HomePage";

function App() {

    const {page} = useContext(AppContext);
    const settings = {
        showThumbs: false,
        selectedItem: page,
        showStatus: false,
        dynamicHeight: true,
        showArrows: false,
        showIndicators: false,
    }

    return (
        <div className="App FadeIn">
            <Header/>
            <div className="Page FadeIn">
                <Carousel {...settings}>
                    <div>
                        <HomePage/>
                    </div>
                    <div>
                        <SliderPage/>
                    </div>
                    <div>
                        <StorePage/>
                    </div>
                    <div>
                        <HomePage/>
                    </div>
                </Carousel>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
