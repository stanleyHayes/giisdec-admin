import React from "react";
import {Card, CardContent, CardMedia, CardActions, Typography, Button, Divider} from "@material-ui/core";
import {Info} from "@material-ui/icons";

function WinnerItem({winner}) {
    return (
        <Card elevation={4} raised={true} variant="elevation">
            <CardMedia src={winner.image} component="img"/>
            <CardContent>
                <Typography variant="h6">{winner.name}</Typography>
                <Typography variant="overline">
                    {winner.profession} | Week {winner.quiz.week}
                </Typography>
                <Typography variant="subtitle2">{winner.week}</Typography>
            </CardContent>
            <Divider variant="fullWidth"/>
            <CardActions>
                <Button>
                    <Info/>
                </Button>
            </CardActions>
        </Card>
    )
}

export default WinnerItem;
