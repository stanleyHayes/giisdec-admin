import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Button, Grid, Typography, useMediaQuery} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import ServiceItem from "../../components/shared/ServiceItem";
import {Add} from "@material-ui/icons";
import BoardMemberItem from "../../components/shared/BoardMemberItem";
import {Link} from "react-router-dom";

function BoardMembersPage() {

    const mobileScreen = useMediaQuery('(max-width: 600px)');

    const member = {
        image: `${process.env.PUBLIC_URL}/images/winner.jpg`,
        name: "Mr. Haruna Andani",
        position: "Chairman",
        profile: "This dark and mysterious color scheme with a vibrant blue accent follows a prevailing Web design trend"
    };


    const [members, setMembers] = useState([member, member, member, member, member, member, member, member, member, member, member, member, member, member, member, member, member, member]);

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
                    <Typography variant="h3">Board Members</Typography>
                </Grid>
                <Grid item={true}>
                    {(mobileScreen) ? (
                        <Button variant="contained" color="primary"><Add/></Button>
                    ) : (
                        <Button variant="contained" color="primary" startIcon={<Add/>}>
                            <Link to="/new/member">
                                New Member
                            </Link>
                        </Button>
                    )}
                </Grid>
            </Grid>
            <Grid container={true} spacing={2}>
                {(members.length === 0) ? (
                    <Grid item={true} container={true} alignItems="center" justify="center"
                          className={classes.noServiceContainer}>
                        <Typography variant="h6">No Members</Typography>
                    </Grid>
                ) : (
                    (members.map(function (member, index) {
                        return (
                            <Grid item={true} key={index} xs={12} md={6} lg={4}>
                                <BoardMemberItem member={member}/>
                            </Grid>
                        )
                    }))
                )}
            </Grid>
        </Layout>
    )
}

export default BoardMembersPage;
