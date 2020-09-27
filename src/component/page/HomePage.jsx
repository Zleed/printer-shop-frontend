import React from 'react';
import CardCarousel from "../display/CardCarousel";

function HomePage() {

    return (
        <div className="HomePage">
            <h1>Featured</h1>
            <CardCarousel/>
            <h1>Top Rated</h1>
            <CardCarousel/>
            <h1>Most Favoured</h1>
            <CardCarousel/>
        </div>
    );
}

export default HomePage;