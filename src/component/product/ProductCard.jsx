import React from 'react';

import {Card, CardHeader, CardActions} from '@material-ui/core';

import '../../resources/style/component/ProductCard.css'
import DetailsButton from "./DetailsButton";

function ProductCard(props) {

    return (
        <Card className={'card'}>
            <CardHeader action={<DetailsButton size={props.size}/>} title={props.name}/>
            <img className={"img"} src={"https://www.bobux.eu/media/wysiwyg/BOBUX_WEB_Sizing_FitYour_Shoe.png"} alt={"img"}/>
            <CardActions>
                <h3 className={"center"}>{props.price}</h3>
            </CardActions>
        </Card>
    );
}

export default ProductCard;