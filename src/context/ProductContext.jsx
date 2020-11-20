import React, {createContext, useState} from "react";
import Axios from "axios";

export const ProductContext = createContext(undefined);

export function ProductProvider(props) {

    const [products, setProduct] = useState([]);
    const [hoodies, setHoodies] = useState([]);
    const [tshirts, setTshirts] = useState([]);
    const [pants, setPants] = useState([]);
    const [other, setOther] = useState([]);

    const productMethods = {
        getAllProduct: () => {
            Axios.get("https://sport-webshop.herokuapp.com/all-product")
                .then(res => setProduct(res.data))
        },

        getProductsByType: () => {
            Axios.get(`https://sport-webshop.herokuapp.com/product/hoodie`)
                .then(res => setHoodies(res.data));
            Axios.get(`https://sport-webshop.herokuapp.com/product/tshirt`)
                .then(res => setTshirts(res.data));
            Axios.get(`https://sport-webshop.herokuapp.com/product/pants`)
                .then(res => setPants(res.data));
            Axios.get(`https://sport-webshop.herokuapp.com/product/other`)
                .then(res => setOther(res.data));
        },
    };

    return (
        <ProductContext.Provider value={{productMethods, products, hoodies, tshirts, pants, other}}>
            {props.children}
        </ProductContext.Provider>
    );
}