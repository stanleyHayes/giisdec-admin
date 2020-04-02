import React, {useState} from "react";
import Layout from "../../../components/layout/Layout";
import {Button, Grid, Typography, useMediaQuery} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import ServiceItem from "../../../components/shared/ServiceItem";
import {makeStyles} from "@material-ui/styles";
import QuizItem from "../../../components/shared/QuizItem";
import {Link} from "react-router-dom";

function QuizzesPage() {

    const mobileScreen = useMediaQuery('(max-width: 600px)');

    const quiz1 = {
        image: `${process.env.PUBLIC_URL}/images/banner.jpg`,
        questions: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",],
        createdAt: "2020-08-12",
        submissions: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        week: 2,
        winner: {
            image: `${process.env.PUBLIC_URL}/images/banner.jpg`,
            name: "Kweku Mensah",
            profession: "Chemical Engineer",
        },
        completed: true
    };

    const [quizzes, setQuizzes] = useState([quiz1, quiz1, quiz1, quiz1, quiz1, quiz1, quiz1, quiz1, quiz1, quiz1]);

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
                    <Typography variant="h3">Quizzes</Typography>
                </Grid>
                <Grid item={true}>
                    {(mobileScreen) ? (
                        <Button variant="contained" color="primary">
                            <Link to="/new/quiz">
                                <Add/>
                            </Link>
                        </Button>
                    ) : (
                        <Button variant="contained" color="primary" startIcon={<Add/>}>
                            <Link to="/new/quiz">
                                New Quiz
                            </Link>
                        </Button>
                    )}
                </Grid>
            </Grid>
            <Grid container={true} spacing={2}>
                {(quizzes.length === 0) ? (
                    <Grid item={true} container={true} alignItems="center" justify="center"
                          className={classes.noServiceContainer}>
                        <Typography variant="h6">No Quizzes</Typography>
                    </Grid>
                ) : (
                    (quizzes.map(function (quiz, index) {
                        return (
                            <Grid item={true} key={index} xs={12} md={6}>
                                <QuizItem quiz={quiz}/>
                            </Grid>
                        )
                    }))
                )}
            </Grid>
        </Layout>
    )
}

export default QuizzesPage;
