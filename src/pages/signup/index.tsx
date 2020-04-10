import React, { useState } from "react";
import { Button, TextField, makeStyles } from "@material-ui/core";
import DefaultLayout from "../../components/base/DefaultLayout";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
// import { useRouter } from "next/router";
import useRouter from "use-react-router";

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

export default function Signup() {
  const classes = useStyles({});
  // const router = useRouter();
  const { history } = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignupClick = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    setLoading(false);
    history.push("/signup/workspace");
    // router.push("/signup/workspace", "/signup/workspace", { shallow: true });
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  return (
    <DefaultLayout>
      <Grid container spacing={0} direction="column" alignItems="center" className={classes.root}>
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.card}>
            <CardHeader
              title="アカウント登録"
              classes={{
                title: classes.title
              }}
            />
            <CardContent>
              <form className={classes.form} noValidate onSubmit={event => handleSignupClick(event)}>
                <Box mb={1}>あとは確認メールを1通チェックするだけで、アノテーションサービスが利用できます！</Box>
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
                <Box component="div" mt={2} mb={2}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={event => handleSignupClick(event)}
                    disabled={loading}
                  >
                    登録する
                  </Button>
                </Box>
              </form>
              <Box component="div" mt={1}>
                <Link href="/signin" color="primary">
                  既にアカウント登録済みの方はこちら
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
}
