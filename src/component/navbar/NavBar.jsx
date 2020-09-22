import './NavBar.css';
import React from 'react';
import { AppBar, Toolbar, ButtonGroup, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function NavBar() {

   const history = useHistory();

    const HomeClickEvent = () => history.push("/");
    const WebShopClickEvent = () => history.push("/store");
    const ContactsClickEvent = () => history.push("/contacts");

    return (
        <div className="navBar">
            <AppBar className={'appBar'}>
                <Toolbar className={'toolBar'}>
                    <ButtonGroup variant="text" color="inherit" aria-label="text primary button group">
                        <Button onClick={HomeClickEvent} className={'button'}> Home </Button>
                        <Button onClick={WebShopClickEvent} className={'button'}> Store </Button>
                        <Button onClick={ContactsClickEvent} className={'button'}> Contacts </Button>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;