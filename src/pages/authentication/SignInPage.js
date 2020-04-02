import React, {useState} from "react";
import {Container, Grid, Card, CardContent, Typography, TextField,  Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";

function SignInPage() {

    const [user, setUser] = useState({});

    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    function handleUserChange(event) {

    }

    function handleSignUpClick(event) {

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
                <Grid item={true} xs={12} md={8} lg={6}>
                    <form>
                        <Card elevation={4} raised={true} variant="elevation">
                            <CardContent>
                                <Typography variant="h3" align="center">Diary</Typography>
                                <Typography variant="body2" align="center">The timeline through your life</Typography>
                                <Typography variant="h6" align="center">Sign In</Typography>

                                <Typography variant="caption">Email</Typography>
                                <TextField
                                    placeholder="Enter Email"
                                    name="email"
                                    fullWidth={true}
                                    onChange={handleUserChange}
                                    value={user.email}
                                    required={true}
                                    margin="dense"
                                    helperText={"This field is required"}
                                    variant="outlined"
                                    type="text"
                                    label="Email"
                                    color="primary"
                                    error={error.email}
                                />


                                <Typography variant="caption">Password</Typography>
                                <TextField
                                    placeholder="Enter Password"
                                    name="password"
                                    fullWidth={true}
                                    onChange={handleUserChange}
                                    value={user.password}
                                    required={true}
                                    margin="dense"
                                    helperText={"This field is required"}
                                    variant="outlined"
                                    type="text"
                                    label="Password"
                                    color="primary"
                                    error={error.password}
                                />

                                <Button
                                    color="primary"
                                    variant="text"
                                    disabled={loading}
                                    fullWidth={true}>
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                </Button>

                                <Button
                                    color="primary"
                                    variant="contained"
                                    disabled={loading}
                                    fullWidth={true}
                                    onClick={handleSignUpClick}>
                                    Sign Up
                                </Button>


                                <Button
                                    color="primary"
                                    variant="text"
                                    disabled={loading}
                                    fullWidth={true}>
                                    <Link to="/register">Don't have an account? Sign Up</Link>
                                </Button>

                            </CardContent>
                        </Card>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SignInPage;
