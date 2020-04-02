import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import ServiceItem from "../../components/shared/ServiceItem";
import MessageItem from "../../components/shared/MessageItem";

function MessagesPage() {

    const message = {
        author: {
            name: "Zeus Ra",
            phone: "+233270048319",
        },
        createdAt: "2020-08-29",
        message: "Awesome customer care. I want to know when my students can come for excursion.",
        subject: "Excursion"
    };

    const [messages, setMessages] = useState([message, message, message, message, message, message, message, message, message, message, message, message, message, message, message, message]);

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
                    <Typography variant="h3">Messages</Typography>
                </Grid>
                <Grid item={true}>
                    <Typography variant="h6">{messages.length} Messages</Typography>
                </Grid>
            </Grid>
            <Grid container={true} spacing={2}>
                {(messages.length === 0) ? (
                    <Grid item={true} container={true} alignItems="center" justify="center"
                          className={classes.noServiceContainer}>
                        <Typography variant="h6">No Messages</Typography>
                    </Grid>
                ) : (
                    (messages.map(function (message, index) {
                        return (
                            <Grid item={true} key={index} xs={12} md={6} lg={4}>
                                <MessageItem message={message}/>
                            </Grid>
                        )
                    }))
                )}
            </Grid>
        </Layout>
    )
}

export default MessagesPage;
