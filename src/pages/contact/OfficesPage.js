import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Button, Grid, Typography, useMediaQuery} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Add} from "@material-ui/icons";
import ServiceItem from "../../components/shared/ServiceItem";
import OfficeItem from "../../components/shared/OfficeItem";
import {Link} from "react-router-dom";

function OfficesPage() {

    const mobileScreen = useMediaQuery('(max-width: 600px)');

    const office = {
        image: `${process.env.PUBLIC_URL}/images/branchoffice.jpg`,
        country: "Ghana",
        city: "Kumasi",
        landmark: "KNUST",
        latlng: [-123.7, 89.4],
        email: "stanleyhayford@gmail.com",
        phone: "+233555180048",
        type: "Branch Office"
    };

    const [offices, setOffices] = useState([office, office, office, office, office, office, office, office, office]);

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
                    <Typography variant="h3">Offices</Typography>
                </Grid>
                <Grid item={true}>
                    {(mobileScreen) ? (
                        <Button variant="contained" color="primary"><Add/></Button>
                    ) : (
                        <Button variant="contained" color="primary" startIcon={<Add/>}>
                            <Link to="/new/office">
                                New Office
                            </Link>
                        </Button>
                    )}
                </Grid>
            </Grid>
            <Grid container={true} spacing={2}>
                {(offices.length === 0) ? (
                    <Grid item={true} container={true} alignItems="center" justify="center"
                          className={classes.noServiceContainer}>
                        <Typography variant="h6">No Offices</Typography>
                    </Grid>
                ) : (
                    (offices.map(function (office, index) {
                        return (
                            <Grid item={true} key={index} xs={12} md={6} lg={4}>
                                <OfficeItem office={office}/>
                            </Grid>
                        )
                    }))
                )}
            </Grid>
        </Layout>
    )
}

export default OfficesPage;
