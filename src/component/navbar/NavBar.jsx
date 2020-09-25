import './NavBar.css'
import React from 'react';
import {ButtonGroup, Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import logo from '../../resources/logo.png';

function NavBar() {

    const history = useHistory();

    const HomeClickEvent = () => history.push("/");
    const WebShopClickEvent = () => history.push("/store");
    const ContactsClickEvent = () => history.push("/contacts");

    return (
        <div className="navBar">
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                <Grid>
                    <img onClick={HomeClickEvent} alt={"Logo"} src={logo}/>
                </Grid>
                <Grid className={"ButtonGroup"}>
                    <ButtonGroup variant="text"  aria-label="buttonGroup">
                        <Button onClick={WebShopClickEvent} className={'button'}> Store </Button>
                        <Button onClick={ContactsClickEvent} className={'button'}> Contacts </Button>
                        <Button onClick={ContactsClickEvent} className={'button'}> Explore </Button>
                        <Button onClick={ContactsClickEvent} className={'button'}> Menu4 </Button>
                        <Button onClick={ContactsClickEvent} className={'button'}> Menu5 </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </div>
    );
}

export default NavBar;