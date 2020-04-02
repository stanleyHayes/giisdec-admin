import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Button, Grid, Typography, useMediaQuery} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Add} from "@material-ui/icons";
import ServiceItem from "../../components/shared/ServiceItem";

function SocialMediaPage() {

    const mobileScreen = useMediaQuery('(max-width: 600px)');

    const [platforms, setPlatforms] = useState([]);

    const useStyles = makeStyles({
        noServiceContainer: {
            minHeight: "85vh",
            backgroundColor: "whitesmoke",
            marginTop: 16,
            marginBottom: 8
        }
    });

    const classes = useStyles();


    return (
        <Layout>
            <Grid container={true} alignItems="center" justify="space-between">
                <Grid item={true}>
                    <Typography variant="h3">Social Media</Typography>
                </Grid>
                <Grid item={true}>
                    {(mobileScreen) ? (
                        <Button variant="contained" color="primary"><Add/></Button>
                    ) : (
                        <Button variant="contained" color="primary" startIcon={<Add/>}>New Service</Button>
                    )}
                </Grid>
            </Grid>
            <Grid container={true} spacing={2}>
                {(platforms.length === 0) ? (
                    <Grid item={true} container={true} alignItems="center" justify="center"
                          className={classes.noServiceContainer}>
                        <Typography variant="h6">No Social Media Platforms</Typography>
                    </Grid>
                ) : (
                    (platforms.map(function (service, index) {
                        return (
                            <Grid item={true} key={index} xs={12} md={4} lg={3}>
                                <ServiceItem service={service}/>
                            </Grid>
                        )
                    }))
                )}
            </Grid>
        </Layout>
    )
}

export default SocialMediaPage;
