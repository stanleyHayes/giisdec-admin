import React from "react";
import {Card, CardActions, CardContent, CardMedia, Typography, Button, Divider} from "@material-ui/core";
import {Delete, Edit, Phone, Email, LocationCity} from "@material-ui/icons";

function OfficeItem({office}) {

    return (
        <Card elevation={4} raised={true} variant="elevation">
            <CardMedia src={office.image} component="img"/>
            <CardContent>
                <Typography variant="overline" gutterBottom={true}>
                    {office.country} | {office.city} | {office.type}
                </Typography>
                <Button startIcon={<Phone/>} variant="text">{office.phone}</Button>
                <Button startIcon={<Email/>} variant="text">{office.email}</Button>
                <Button startIcon={<LocationCity/>} variant="text">{office.landmark}</Button>
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

export default OfficeItem;
