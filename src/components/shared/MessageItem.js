import React from "react";
import {Card, CardHeader, CardContent, Typography, Avatar, Button, CardActions, Divider} from "@material-ui/core";
import {Phone} from "@material-ui/icons";

function MessageItem({message}) {

    function getDisplayName(name) {
        const names = name.split(" ");
        return `${names[0][0]} ${names[1][0]}`
    }

    return (
        <Card elevation={4} raised={true} variant="elevation">
            <CardHeader
                avatar={<Avatar>{getDisplayName(message.author.name)}</Avatar>}
                title={message.author.name}
                subheader={new Date(message.createdAt).toDateString()}/>
            <CardContent>
                <Typography variant="h6">{message.subject}</Typography>
                <Typography variant="subtitle2">{message.message}</Typography>
            </CardContent>
            <Divider variant="fullWidth" />
            <CardActions>
                <Button startIcon={<Phone/>} variant="overline">{message.author.phone}</Button>
            </CardActions>
        </Card>
    )
}

export default MessageItem
