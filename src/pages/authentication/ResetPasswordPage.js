import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Button, Card, CardContent, Divider, Grid, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

function ResetPasswordPage(props) {

    function handlePasswordChange(event) {

    }

    function handlePasswordResetClick(event) {

    }

    const [passwords, setPasswords] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    const useStyle = makeStyles({
        container: {
            marginTop: 30,
            marginBottom: 30
        }
    });

    const classes = useStyle();


    return (
        <Layout>
            <Grid className={classes.container} container={true} justify="center">
                <Grid item={true} xs={12} md={8} lg={6}>
                    <Card elevation={4} raised={true} variant="elevation">
                        <CardContent>
                            <form>
                                <Typography variant="h3" align="center">Diary</Typography>
                                <Typography variant="body2" align="center">The timeline through your life</Typography>
                                <Typography variant="h6" align="center">Reset Password</Typography>
                                <Divider variant="fullWidth"/>

                                <Typography variant="overline">New Password</Typography>
                                <TextField
                                    placeholder="New Password"
                                    name="description"
                                    fullWidth={true}
                                    onChange={handlePasswordChange}
                                    value={passwords.newPassword}
                                    required={true}
                                    margin="dense"
                                    helperText={"This field is required"}
                                    variant="outlined"
                                    type="text"
                                    label="New Password"
                                    color="primary"
                                    error={error.newPassword}
                                />

                                <Typography variant="overline">Confirm Password</Typography>
                                <TextField
                                    placeholder="Enter Password Confirmation"
                                    name="confirmPassword"
                                    fullWidth={true}
                                    onChange={handlePasswordChange}
                                    value={passwords.confirmPassword}
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
                                    onClick={handlePasswordResetClick}>
                                    Save Password
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default ResetPasswordPage;
