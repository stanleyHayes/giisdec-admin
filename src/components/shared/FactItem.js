import React from "react";
import {Card, CardContent, CardActions, CardMedia, Typography, Button, Divider} from "@material-ui/core";
import {Delete, Edit} from "@material-ui/icons";

function FactItem({fact}) {
    return (
        <Card elevation={4} raised={true} variant="elevation">
            <CardMedia src={fact.image} component="img"/>
            <CardContent>
                <Typography variant="h6" gutterBottom={true}>{new Date(fact.createdAt).toDateString()}</Typography>
                <Typography variant="subtitle2">{fact.fact}</Typography>
            </CardContent>
            <Divider />
            <CardActions>
                <Button>
                    <Delete/>
                </Button>

                <Button>
                    <Edit/>
                </Button>
            </CardActions>
        </Card>
    )
}

export default FactItem;
