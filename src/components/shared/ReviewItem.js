import React from "react";
import {Card, CardContent, Avatar, CardHeader, CardActions, Divider, Typography} from "@material-ui/core";
import {Rating} from "@material-ui/lab";

function ReviewItem({review}) {

    function getDisplayName(name) {
        const names = name.split(" ");
        return `${names[0][0]} ${names[1][0]}`
    }

    return (
        <Card elevation={4} raised={true} variant="elevation">
            <CardHeader
                avatar={<Avatar>{getDisplayName(review.author.name)}</Avatar>}
                title={review.author.name}
                subheader={new Date(review.createdAt).toDateString()}/>

            <CardContent>
                <Typography variant="subtitle2" gutterBottom={true}>{review.review}</Typography>
            </CardContent>
            <Divider variant="fullWidth"/>
            <CardActions>
                <Rating
                    size="medium"
                    value={review.rating}
                    max={5} readOnly={true}
                    precision={0.5}
                    title="Rating"/>
            </CardActions>
        </Card>
    )
}

export default ReviewItem;
