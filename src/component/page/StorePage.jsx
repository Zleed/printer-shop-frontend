import React, {useContext, useEffect} from 'react';
import ProductCard from "../product/ProductCard";
import {ProductContext} from "../../context/ProductContext";
import '../../resources/style/component/storepage.css'

function StorePage() {

    const {products, productMethods} = useContext(ProductContext);

    useEffect(() => {
        productMethods.getAllProduct();
    }, [])

    let innerHtml = [];
    let temp = [];
    let c = 0;
    for (let product of products) {
        c++;
        temp.push(<ProductCard name={product.name} price={product.price} size={product.size}/>);
        if (c > 4) {
            innerHtml.push(<div className={"inline"}>{temp}</div>);
            temp = [];
            c = 0;
        }
    }
    if (c > 0) innerHtml.push(<div className={"inline"}>{temp}</div>);

    return (
        <div className="StorePage">
            {innerHtml}
        </div>
    );
}

export default StorePage;