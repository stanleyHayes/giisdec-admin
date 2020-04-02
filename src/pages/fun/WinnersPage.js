import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import WinnerItem from "../../components/shared/WinnerItem";

function WinnersPage() {

    const winner = {
        image: `${process.env.PUBLIC_URL}/images/winner.jpg`,
        name: "Kweku Mensah",
        profession: "Chemical Engineer",
        quiz: {
            questions: [],
            date: "2020-08-12",
            duration: {
                unit: "Minutes",
                amount: 30
            },
            submissions: [],
            week: 2,
        }
    };

    const [winners, setWinners] = useState([winner, winner, winner, winner, winner, winner, winner, winner]);

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
                    <Typography variant="h3">Winners</Typography>
                </Grid>
                <Grid item={true}>
                    <Typography variant="h6">{winners.length} Winners</Typography>
                </Grid>
            </Grid>
            <Grid container={true} spacing={2}>
                {(winners.length === 0) ? (
                    <Grid item={true} container={true} alignItems="center" justify="center"
                          className={classes.noServiceContainer}>
                        <Typography variant="h6">No Winners</Typography>
                    </Grid>
                ) : (
                    (winners.map(function (winner, index) {
                        return (
                            <Grid item={true} key={index} xs={12} md={6} lg={4}>
                                <WinnerItem winner={winner}/>
                            </Grid>
                        )
                    }))
                )}
            </Grid>
        </Layout>
    )
}

export default WinnersPage;
