import React from "react";
import {Card, CardActions, CardContent, CardMedia, Typography, Button, Divider} from "@material-ui/core";
import {Delete, Edit} from "@material-ui/icons";

function ServiceItem({service}) {
    return (
        <Card elevation={4} raised={true} variant="elevation">
            <CardMedia src={service.image} component="img"/>
            <CardContent>
                <Typography variant="h6">{service.name}</Typography>
                <Typography variant="subtitle2">{service.description}</Typography>
            </CardContent>
            <Divider variant="fullWidth"/>
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

export default ServiceItem;
