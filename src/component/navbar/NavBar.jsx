import React, {useContext} from 'react';
// import {useHistory} from "react-router-dom";

import {ButtonGroup, Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import '../../resources/style/component/NavBar.css'
import '../../resources/style/animation.css'
import logo from '../../resources/logo.png';
import {AppContext} from "../../context/AppContext";

function NavBar() {

    // const history = useHistory();
    const {setPage} = useContext(AppContext);
    // const HomeClickEvent = () => history.push("/");
    // const WebShopClickEvent = () => history.push("/store");
    // const ContactsClickEvent = () => history.push("/contacts");

    return (
        <div className="navBar">
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                <Grid>
                    <img className={"FadeIn"} onClick={() => setPage(0)} alt={"Logo"} src={logo}/>
                </Grid>
                <Grid className={"ButtonGroup"}>
                    <ButtonGroup className={"FadeIn"} variant="text"  aria-label="buttonGroup">
                        <Button onClick={() => setPage(1)} className={'button'}> Store </Button>
                        <Button onClick={() => setPage(2)} className={'button'}> Contacts </Button>
                        <Button onClick={() => setPage(3)} className={'button'}> Explore </Button>
                        <Button onClick={() => setPage(4)} className={'button'}> Menu4 </Button>
                        <Button onClick={() => setPage(5)} className={'button'}> Menu5 </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </div>
    );
}

export default NavBar;