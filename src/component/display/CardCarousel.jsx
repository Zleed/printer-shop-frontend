import React from 'react';
import ProductCard from '../product/ProductCard';
import {Carousel} from "react-responsive-carousel";
import '../../resources/style/component/carousel.min.css'

function CardCarousel(props) {

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
                    {props.products.map(product =>
                        <ProductCard name={product.name} price={product.price} size={product.size}/>)}
                </div>
            </Carousel>
            <br/>
        </div>
    );
}

export default CardCarousel;