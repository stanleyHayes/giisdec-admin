import React from "react";
import {Card, CardContent, CardMedia, CardActions, Typography, Button, Divider} from "@material-ui/core";
import {Delete, Edit, Info} from "@material-ui/icons";

function BoardMemberItem({member}) {
    return (
        <Card elevation={4} raised={true} variant="elevation">
            <CardMedia src={member.image} component="img" />
            <CardContent>
                <Typography gutterBottom={true} variant="h6">{member.name}</Typography>
                <Typography variant="overline" gutterBottom={true}>{member.position}</Typography>
                <Typography variant="subtitle2">{member.profile}</Typography>
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

export default BoardMemberItem;
