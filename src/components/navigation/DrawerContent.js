import React from "react";

import {
    List,
    Grid,
    Typography,
    Container,
    ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary
} from "@material-ui/core";

import {HomeOutlined, PostAdd, Person, Lock, Add} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import LinkItem from "../shared/LinkItem";

function DrawerContent({handleDrawerClose}) {

    const useStyles = makeStyles({
        container: {
            marginTop: 16
        },
        homeIcon: {
            color: "blue"
        },
        createIcon: {
            color: "green"
        },
        profileIcon: {
            color: "orange"
        },
        lockIcon: {
            color: "purple"
        },
        logoutIcon: {
            color: "red"
        }
    });

    const classes = useStyles();

    const mainLinks = [
        {
            name: "Home",
            icon: <HomeOutlined className={classes.homeIcon}/>,
            path: ""
        },
        {
            name: "Dashboard",
            icon: <HomeOutlined className={classes.homeIcon}/>,
            path: "dashboard"
        },
        {
            name: "Services",
            icon: <PostAdd className={classes.createIcon}/>,
            path: "services"
        },
        {
            name: "Events",
            icon: <Person className={classes.profileIcon}/>,
            path: "events"
        },
        {
            name: "Reviews",
            icon: <Lock className={classes.lockIcon}/>,
            path: "reviews"
        },
    ];

    const aboutLinks = [
        {
            name: "About",
            icon: <HomeOutlined className={classes.homeIcon}/>,
            path: "about"
        },
        {
            name: "Board Members",
            icon: <PostAdd className={classes.createIcon}/>,
            path: "members"
        }
    ];

    const mediaLinks = [
        {
            name: "Images",
            icon: <HomeOutlined className={classes.homeIcon}/>,
            path: "images"
        },
        {
            name: "Videos",
            icon: <PostAdd className={classes.createIcon}/>,
            path: "videos"
        },
        {
            name: "Operations",
            icon: <Person className={classes.profileIcon}/>,
            path: "operations"
        }
    ];

    const funLinks = [
        {
            name: "Facts",
            icon: <HomeOutlined className={classes.homeIcon}/>,
            path: "facts"
        },
        {
            name: "Quizzes",
            icon: <PostAdd className={classes.createIcon}/>,
            path: "quizzes"
        },
        {
            name: "Winners",
            icon: <Lock className={classes.lockIcon}/>,
            path: "winners"
        },
    ];

    const contactLinks = [
        {
            name: "Social Media",
            icon: <HomeOutlined className={classes.homeIcon}/>,
            path: "social-media"
        },
        {
            name: "Offices",
            icon: <PostAdd className={classes.createIcon}/>,
            path: "offices"
        },
        {
            name: "Messages",
            icon: <Person className={classes.profileIcon}/>,
            path: "messages"
        }
    ];

    return (
        <Container className={classes.container}>
            <Grid container={true} direction="column" spacing={2}>
                <Grid item={true}>
                    <Typography variant="h6" align="center">Stanley Hayford</Typography>
                    <Typography variant="body2" align="center">Your future Fuhrer</Typography>
                </Grid>
                <Grid item={true}>
                    <List>
                        {
                            mainLinks.map(function (link, index) {
                                return (
                                    <LinkItem handleDrawerClose={handleDrawerClose} link={link} key={index}/>
                                )
                            })
                        }
                    </List>
                </Grid>
                <Grid item={true}>
                    <ExpansionPanel variant="outlined">
                        <ExpansionPanelSummary expandIcon={<Add/>}>
                            <Typography>About</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <List>
                                {
                                    aboutLinks.map(function (link, index) {
                                        return (
                                            <LinkItem handleDrawerClose={handleDrawerClose} link={link} key={index}/>
                                        )
                                    })
                                }
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>

                <Grid item={true}>
                    <ExpansionPanel variant="outlined">
                        <ExpansionPanelSummary expandIcon={<Add/>}>
                            <Typography>Media</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <List>
                                {
                                    mediaLinks.map(function (link, index) {
                                        return (
                                            <LinkItem handleDrawerClose={handleDrawerClose} link={link} key={index}/>
                                        )
                                    })
                                }
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>

                <Grid item={true}>
                    <ExpansionPanel variant="outlined">
                        <ExpansionPanelSummary expandIcon={<Add/>}>
                            <Typography>Fun</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <List>
                                {
                                    funLinks.map(function (link, index) {
                                        return (
                                            <LinkItem handleDrawerClose={handleDrawerClose} link={link} key={index}/>
                                        )
                                    })
                                }
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>

                <Grid item={true}>
                    <ExpansionPanel variant="outlined">
                        <ExpansionPanelSummary expandIcon={<Add/>}>
                            <Typography>Contact</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <List>
                                {
                                    contactLinks.map(function (link, index) {
                                        return (
                                            <LinkItem handleDrawerClose={handleDrawerClose} link={link} key={index}/>
                                        )
                                    })
                                }
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DrawerContent;
