import React from 'react';
import ProductCard from '../product/ProductCard';
import '../../resources/style/animation.css'

function HomePage() {

    return (
        <div className="HomePage FadeIn">
            HomePage
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    );
}

export default HomePage;