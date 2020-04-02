import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Button, Grid, Typography, useMediaQuery} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Add} from "@material-ui/icons";
import FactItem from "../../components/shared/FactItem";

function FactsPage() {

    const mobileScreen = useMediaQuery('(max-width: 600px)');

    const fact = {
        image: `${process.env.PUBLIC_URL}/images/banner.jpg`,
        fact: "Largest steel deposit is found in Tarkwa in the Western Region on Ghana",
        createdAt: "2020-09-11"
    };

    const [facts, setFacts] = useState([fact, fact, fact, fact, fact, fact, fact, fact, fact, fact, fact, fact, fact, fact, fact, fact, fact, fact]);

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
                    <Typography variant="h3">Facts</Typography>
                </Grid>
                <Grid item={true}>
                    {(mobileScreen) ? (
                        <Button variant="contained" color="primary"><Add/></Button>
                    ) : (
                        <Button variant="contained" color="primary" startIcon={<Add/>}>New Fact</Button>
                    )}
                </Grid>
            </Grid>
            <Grid container={true} spacing={2}>
                {(facts.length === 0) ? (
                    <Grid item={true} container={true} alignItems="center" justify="center"
                          className={classes.noServiceContainer}>
                        <Typography variant="h6">No Facts</Typography>
                    </Grid>
                ) : (
                    (facts.map(function (fact, index) {
                        return (
                            <Grid item={true} key={index} xs={12} md={6} lg={4}>
                                <FactItem fact={fact}/>
                            </Grid>
                        )
                    }))
                )}
            </Grid>
        </Layout>
    )
}

export default FactsPage;
