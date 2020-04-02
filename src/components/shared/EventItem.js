import React from "react";
import {Card, CardMedia, CardActions, CardContent, Typography, Button, Divider} from "@material-ui/core";
import {Info, Delete, Edit} from "@material-ui/icons";
function EventItem({event}) {

    return (
        <Card elevation={4} raised={true} variant="elevation">
            <CardMedia component="img" src={event.image} />
            <CardContent>
                <Typography gutterBottom={true} variant="h6">{event.name}</Typography>
                <Typography gutterBottom={true} variant="overline">{event.category} | {event.author.name} | {new Date(event.createdAt).toDateString()}</Typography>
                <Typography variant="subtitle2">{event.caption}</Typography>
            </CardContent>
            <Divider variant="fullWidth" />
            <CardActions>
                <Button>
                    <Delete />
                </Button>

                <Button>
                    <Edit />
                </Button>

                <Button>
                    <Info />
                </Button>
            </CardActions>
        </Card>
    )
}

export default EventItem;
