import React, {useState} from "react";
import {Container, Grid, Card, CardContent, Typography, TextField, Divider, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

function ForgotPasswordPage() {

    const [email, setEmail] = useState();

    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    function handleEmailChange(event) {

    }

    function handleForgotPasswordClick(event) {

    }

    const useStyle = makeStyles({
        container: {
            marginTop: 30,
            marginBottom: 30
        }
    });

    const classes = useStyle();

    return (
        <Container className={classes.container}>
            <Grid container={true} justify="center">
                <Grid item={true} xs={12} md={6}>
                    <form>
                        <Card elevation={4} raised={true} variant="elevation">
                            <CardContent>
                                <Typography variant="h3" align="center" gutterBottom={true}>Diary</Typography>
                                <Typography variant="body2" align="center" gutterBottom={true}>
                                    The timeline through your life
                                </Typography>
                                <Typography variant="h6" align="center" gutterBottom={true}>Forgot Password</Typography>

                                <Typography variant="caption">Email</Typography>
                                <TextField
                                    placeholder="Enter Email"
                                    name="email"
                                    fullWidth={true}
                                    onChange={handleEmailChange}
                                    value={email}
                                    required={true}
                                    margin="dense"
                                    helperText={"This field is required"}
                                    variant="outlined"
                                    type="text"
                                    label="Email"
                                    color="primary"
                                    error={error}
                                />

                                <Button
                                    color="primary"
                                    variant="contained"
                                    disabled={loading}
                                    fullWidth={true}
                                    onClick={handleForgotPasswordClick}>
                                    Send Email
                                </Button>
                            </CardContent>
                        </Card>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ForgotPasswordPage;
