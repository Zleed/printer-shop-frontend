import React from 'react';

import {Card, CardHeader, CardMedia, CardContent, CardActions, Avatar,
    IconButton, Typography} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import '../../resources/style/component/ProductCard.css'

function ProductCard() {

    return (
        <Card className={'card'}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={'avatar'}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                className={'media'}
                image="https://www.freelogodesign.org/file/app/client/thumb/8e691123-cf33-4e1a-8892-3dd256d61cf0_200x200.png?1600851441759"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default ProductCard;