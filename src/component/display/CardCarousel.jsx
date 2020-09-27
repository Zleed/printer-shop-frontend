import React from 'react';
import ProductCard from '../product/ProductCard';
import {Carousel} from "react-responsive-carousel";
import '../../resources/style/component/carousel.min.css'

function CardCarousel() {

    const settings = {
        showThumbs: false,
        showStatus: false,
        dynamicHeight: true,
        showArrows: true,
        showIndicators: false,
    }

    return (
        <div className="CardCarousel">
            <Carousel {...settings}>
                <div className={"CardGroup"}>
                    <ProductCard className={"Card"}/>
                    <ProductCard className={"Card"}/>
                    <ProductCard className={"Card"}/>
                    <ProductCard className={"Card"}/>
                    <ProductCard className={"Card"}/>
                </div>
                <div className={"CardGroup"}>
                    <ProductCard className={"Card"}/>
                    <ProductCard className={"Card"}/>
                    <ProductCard className={"Card"}/>
                    <ProductCard className={"Card"}/>
                    <ProductCard className={"Card"}/>
                </div>
                <div className={"CardGroup"}>
                    <ProductCard className={"Card"}/>
                    <ProductCard className={"Card"}/>
                    <ProductCard className={"Card"}/>
                    <ProductCard className={"Card"}/>
                    <ProductCard className={"Card"}/>
                </div>
            </Carousel>
            <br/>
        </div>
    );
}

export default CardCarousel;