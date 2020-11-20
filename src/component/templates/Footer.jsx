import React from 'react';

import Grid from "@material-ui/core/Grid";

import '../../resources/style/component/Footer.css'

function Footer() {

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