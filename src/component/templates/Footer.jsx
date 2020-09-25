import React from 'react';
import './Footer.css'
import Grid from "@material-ui/core/Grid";

function Footer() {

    const wave = require('../../resources/waveBottom.svg');

    return (
        <div className="Footer">
            <Grid className={"BottomGrid"} container direction="col" justify="space-evenly" alignItems="center">
                <Grid>
                   <p>template</p>
                   <p>template</p>
                   <p>template</p>
                   <p>template</p>
                   <p>template</p>
                </Grid>
                <Grid>
                    <p>template</p>
                    <p>template</p>
                    <p>template</p>
                    <p>template</p>
                    <p>template</p>
                </Grid>
                <Grid>
                    <p>template</p>
                    <p>template</p>
                    <p>template</p>
                    <p>template</p>
                    <p>template</p>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;