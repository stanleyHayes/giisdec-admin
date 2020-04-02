import React, {useState} from "react";
import {Container, Grid, Card, CardContent, Typography, TextField, Divider, Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";

function SignUpPage() {

    const [user, setUser] = useState({});

    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    function handleUserChange(event) {

    }

    function handlePasswordChange(event) {

    }

    function handleSignUpClick(event) {

    }

    const useStyles = makeStyles({
        container: {
            marginTop: 30,
            marginBottom: 30
        }
    });

    const classes = useStyles();

    return (
        <Container>
            <Grid className={classes.container} justify="center" container={true}>
                <Grid item={true} xs={12} md={8} lg={6}>
                    <form>
                        <Card elevation={4} raised={true} variant="elevation">
                            <CardContent>
                                <Typography variant="h3" align="center">Diary</Typography>
                                <Typography variant="body2" align="center">The timeline through your life</Typography>
                                <Typography variant="h6" align="center">Sign Up</Typography>

                                <Typography variant="caption">Name</Typography>
                                <TextField
                                    placeholder="Enter Name"
                                    name="name"
                                    fullWidth={true}
                                    onChange={handleUserChange}
                                    value={user.name}
                                    required={true}
                                    margin="dense"
                                    helperText={"This field is required"}
                                    variant="outlined"
                                    type="text"
                                    label="Name"
                                    color="primary"
                                    error={error.name}
                                />

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

                                <Typography variant="caption">Profession</Typography>
                                <TextField
                                    placeholder="Enter Profession"
                                    name="profession"
                                    fullWidth={true}
                                    onChange={handleUserChange}
                                    value={user.profession}
                                    required={true}
                                    margin="dense"
                                    helperText={"This field is required"}
                                    variant="outlined"
                                    type="text"
                                    label="Profession"
                                    color="primary"
                                    error={error.profession}
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

                                <Typography variant="caption">Confirm Password</Typography>
                                <TextField
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    fullWidth={true}
                                    onChange={handlePasswordChange}
                                    value={confirmPassword}
                                    required={true}
                                    margin="dense"
                                    helperText={"This field is required"}
                                    variant="outlined"
                                    type="text"
                                    label="Confirm Password"
                                    color="primary"
                                    error={error.confirmPassword}
                                />


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
                                    <Link to="/login">Already have an account? Sign In</Link>
                                </Button>

                            </CardContent>
                        </Card>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SignUpPage;
