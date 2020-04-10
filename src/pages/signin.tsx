import React, { useState } from "react";
import { Button, TextField, makeStyles } from "@material-ui/core";
import { AuthUserStore } from "../store/AuthUserStore";
import DefaultLayout from "../components/base/DefaultLayout";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    height: "calc(100vh - 64px - 64px)" // Subtract header and footer height
  },
  title: {
    fontSize: "1.3rem",
    fontWeight: 600
  },
  card: {
    marginTop: theme.spacing(10)
  },
  form: {
    width: "100%" // Fix IE 11 issue.
  }
}));

export default function Signin() {
  const classes = useStyles({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const authStore = AuthUserStore.useContainer();

  const handleSigninClick = async () => {
    try {
      setLoading(true);
      await authStore.signIn(email, password);
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <DefaultLayout>
      <Grid container spacing={0} direction="column" alignItems="center" className={classes.root}>
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.card}>
            <CardHeader
              title="ログイン"
              classes={{
                title: classes.title
              }}
            />
            <CardContent>
              <form className={classes.form} noValidate>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="メールアドレス"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={event => handleEmailChange(event)}
                />
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="パスワード"
                  type="password"
                  value={password}
                  onChange={event => handlePasswordChange(event)}
                />
                <Box component="div" mt={2} mb={2}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleSigninClick}
                    disabled={loading}
                  >
                    ログイン
                  </Button>
                </Box>
              </form>
              <Box component="div" mt={1}>
                <Link component={RouterLink} to="/signup">アカウント登録はこちら</Link>
              </Box>
              <Box component="div" mt={1}>
                <Link href="/resetPassword">パスワードを忘れた方はこちら</Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
}
