import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Typography, useMediaQuery} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

function IndexPage() {

    const mobileScreen = useMediaQuery('(max-width: 600px)');

    const [services, setServices] = useState([]);

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
            <Typography variant="h1">Index Page</Typography>
        </Layout>
    )
}

export default IndexPage;
