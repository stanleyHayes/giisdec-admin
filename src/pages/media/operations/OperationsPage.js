import React, {useState} from "react";
import Layout from "../../../components/layout/Layout";
import {Button, Grid, Typography, useMediaQuery} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Add} from "@material-ui/icons";
import ServiceItem from "../../../components/shared/ServiceItem";
import {Link} from "react-router-dom";

function OperationsPage() {

    const mobileScreen = useMediaQuery('(max-width: 600px)');

    const [operations, setOperations] = useState([]);

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
                    <Typography variant="h3">Operations</Typography>
                </Grid>
                <Grid item={true}>
                    {(mobileScreen) ? (
                        <Button variant="contained" color="primary">
                            <Link to="/new/operation">
                                <Add/>
                            </Link>
                        </Button>
                    ) : (
                        <Button variant="contained" color="primary" startIcon={<Add/>}>
                            <Link to="/new/operation">
                                New Operation
                            </Link>
                        </Button>
                    )}
                </Grid>
            </Grid>
            <Grid container={true} spacing={2}>
                {(operations.length === 0) ? (
                    <Grid item={true} container={true} alignItems="center" justify="center"
                          className={classes.noServiceContainer}>
                        <Typography variant="h6">No Operations</Typography>
                    </Grid>
                ) : (
                    (operations.map(function (service, index) {
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

export default OperationsPage;
