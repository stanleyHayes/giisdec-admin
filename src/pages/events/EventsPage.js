import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Button, Grid, Typography, useMediaQuery} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Add} from "@material-ui/icons";
import EventItem from "../../components/shared/EventItem";
import {Link} from "react-router-dom";

function EventsPage() {

    const mobileScreen = useMediaQuery('(max-width: 600px)');

    const event = {
        createdAt: "2020-08-02",
        category: "extraction",
        caption: "This dark and mysterious color scheme with a vibrant blue accent follows a prevailing Web design trend",
        author: {
            name: "Stanley Hayford",
            email: "hayfordstanley@gmail.com"
        },
        name: "Extraction of Iron",
        image: `${process.env.PUBLIC_URL}/images/banner.jpg`
    };

    const [events, setEvents] = useState([event, event, event, event, event, event, event, event, event, event, event, event]);

    const useStyles = makeStyles({
        noServiceContainer: {
            minHeight: "85vh",
            backgroundColor: "whitesmoke",
            marginTop: 16,
            marginBottom: 8
        },
        container: {
            paddingTop: 30,
            paddingBottom: 30
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Grid className={classes.container} container={true} alignItems="center" justify="space-between">
                <Grid item={true}>
                    <Typography variant="h3">Events</Typography>
                </Grid>
                <Grid item={true}>
                    {(mobileScreen) ? (
                        <Button variant="contained" color="primary">
                            <Link to="/new/event">
                                <Add/>
                            </Link>
                        </Button>
                    ) : (
                        <Button variant="contained" color="primary" startIcon={<Add/>}>
                            <Link to="/new/event">
                                New Event
                            </Link>
                        </Button>
                    )}
                </Grid>
            </Grid>
            <Grid container={true} spacing={2}>
                {(events.length === 0) ? (
                    <Grid item={true} container={true} alignItems="center" justify="center"
                          className={classes.noServiceContainer}>
                        <Typography variant="h6">No Events</Typography>
                    </Grid>
                ) : (
                    (events.map(function (event, index) {
                        return (
                            <Grid item={true} key={index} xs={12} md={6} lg={6}>
                                <EventItem event={event}/>
                            </Grid>
                        )
                    }))
                )}
            </Grid>
        </Layout>
    )
}

export default EventsPage;
