import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

import {Rating} from "@material-ui/lab";
import ReviewItem from "../../components/shared/ReviewItem";

function ReviewsPage() {

    const review = {
        author: {
            name: "Stanley Hayford",
            country: "Ghana"
        },
        createdAt: "2020-11-11",
        review: "This must be the best service I have ever encountered. Thank you.",
        rating: 5
    };


    const [reviews, setReviews] = useState([review, review, review, review, review, review, review, review]);

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
                    <Typography variant="h3">Reviews</Typography>
                </Grid>
                <Grid item={true}>
                    <Typography variant="h6">Average Rating</Typography>
                    <Rating size="medium" value={4.5} max={5} readOnly={true} precision={0.5} title="Average Rating"/>
                </Grid>
            </Grid>
            <Grid container={true} spacing={2}>
                {(reviews.length === 0) ? (
                    <Grid item={true} container={true} alignItems="center" justify="center"
                          className={classes.noServiceContainer}>
                        <Typography variant="h6">No Reviews</Typography>
                    </Grid>
                ) : (
                    (reviews.map(function (review, index) {
                        return (
                            <Grid item={true} key={index} xs={12} md={6} lg={4}>
                                <ReviewItem review={review}/>
                            </Grid>
                        )
                    }))
                )}
            </Grid>
        </Layout>
    )
}

export default ReviewsPage;
