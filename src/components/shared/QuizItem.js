import React from "react";
import {Card, CardMedia, CardActions, CardContent, Typography, Button, Divider} from "@material-ui/core";
import {Info, Cake} from "@material-ui/icons";

function QuizItem({quiz}) {
    return (
        <Card elevation={4} raised={true} variant="elevation">
            <CardMedia src={quiz.image} component="img"/>
            <CardContent>
                <Typography variant="overline">
                    Week {quiz.week} | {quiz.submissions.length} Submissions | {quiz.questions.length} Questions
                </Typography>
                <Typography variant="h6"> <Cake /> {(quiz.completed) ? quiz.winner.name : "Quiz Ongoing"}</Typography>
            </CardContent>
            <Divider variant="fullWidth" />
            <CardActions>
                <Button>
                    <Info/>
                </Button>
            </CardActions>
        </Card>
    )
}

export default QuizItem;
