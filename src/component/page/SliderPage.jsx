import React, {useContext, useEffect} from 'react';
import CardCarousel from "../display/CardCarousel";
import {ProductContext} from "../../context/ProductContext";

function SliderPage() {

    const {hoodies, tshirts, pants, other, productMethods} = useContext(ProductContext);

    useEffect(() => {
        productMethods.getProductsByType();
    }, [])

    return (
        <div className="SliderPage">
            <h1>Hoodies</h1>
            <CardCarousel products={hoodies}/>
            <h1>T-shirts</h1>
            <CardCarousel products={tshirts}/>
            <h1>Pants</h1>
            <CardCarousel products={pants}/>
            <h1>Other</h1>
            <CardCarousel products={other}/>
        </div>
    );
}

export default SliderPage;