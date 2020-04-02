import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Typography, Grid, Button, useMediaQuery} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import ServiceItem from "../../components/shared/ServiceItem";
import {makeStyles} from "@material-ui/styles";

function ServicesPage() {

    const service = {
        image: `${process.env.PUBLIC_URL}/images/banner.jpg`,
        name: "Planning And Engineering",
        description: "We have years of first-hand underground mine engineering and operating experience in most countries and across multiple commodities using all common mining methods"
    };

    const service1 = {
        image: `${process.env.PUBLIC_URL}/images/banner.jpg`,
        name: "Planning And Engineering",
        description: "Our engineers have strong operational and technical backgrounds and have gained substantial experience in mines employing a multitude of mining methods, exploiting all commodities on all continents. "
    };

    const service2 = {
        image: `${process.env.PUBLIC_URL}/images/banner.jpg`,
        name: "Mining Economics And Finance",
        description: "Commodity price and macro-economic assumptions are frequently required as input to our technical authoring and reviewing mandates which include:"
    };

    const service3 = {
        image: `${process.env.PUBLIC_URL}/images/banner.jpg`,
        name: "Mining Geology",
        description: "In any mining operation, understanding the geology of the orebody and waste rocks is fundamental for successful resource estimation, geotechnical engineering, mine planning and mineral processing."
    };

    const mobileScreen = useMediaQuery('(max-width: 600px)');

    const [services, setServices] = useState([service, service1, service2, service3, service, service1, service2, service3]);

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
                    <Typography variant="h3">Services</Typography>
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
                {(services.length === 0) ? (
                    <Grid item={true} container={true} alignItems="center" justify="center"
                          className={classes.noServiceContainer}>
                        <Typography variant="h6">No Services</Typography>
                    </Grid>
                ) : (
                    (services.map(function (service, index) {
                        return (
                            <Grid item={true} key={index} xs={12} md={6} lg={6}>
                                <ServiceItem service={service}/>
                            </Grid>
                        )
                    }))
                )}
            </Grid>
        </Layout>
    )
}

export default ServicesPage;
