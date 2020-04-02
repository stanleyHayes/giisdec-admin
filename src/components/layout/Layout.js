import React, {useState} from "react";

import {Container, useMediaQuery, Grid, Drawer, Fab, Hidden} from "@material-ui/core";
import {MenuOpen} from "@material-ui/icons";

import DrawerContent from "../navigation/DrawerContent";
import {makeStyles} from "@material-ui/styles";

function Layout(props) {

    const [drawerOpen, setDrawerOpen] = useState(false);

    function handleDrawerOpen() {
        setDrawerOpen(!drawerOpen);
    }

    const mobileScreen = useMediaQuery('(max-width: 1200px)');

    const useStyles = makeStyles({
        openMenuFab: {
            position: "fixed",
            right: 16,
            bottom: 16,
            color: "green"
        },
        container: {
            marginTop: 16
        }
    });

    const classes = useStyles();

    function handleDrawerClose() {
        setDrawerOpen(false);
    }

    return (
        <Container className={classes.container}>
            <Grid container={true}>
                <Grid item={true} xs={false} sm={false} md={false} lg={3}>
                    <Hidden mdDown={!(mobileScreen && drawerOpen)}>
                        <Drawer
                            variant={mobileScreen ? "temporary" : "permanent"}
                            transitionDuration={{enter: 1000, exit: 1000}}
                            anchor="left" onClose={handleDrawerClose}
                            elevation={2} open={mobileScreen && drawerOpen}>
                            <DrawerContent handleDrawerClose={handleDrawerClose}/>
                        </Drawer>
                    </Hidden>
                </Grid>
                <Grid item={true} xs={12} md={12} lg={9}>
                    {props.children}
                </Grid>

                <div className={classes.openMenuFab}>
                    {mobileScreen ? (
                        <Fab color="primary" variant="round" onClick={handleDrawerOpen}>
                            <MenuOpen/>
                        </Fab>
                    ) : null}
                </div>
            </Grid>
        </Container>
    )
}

export default Layout;
