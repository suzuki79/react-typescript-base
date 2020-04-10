import React from "react";
import Signup from "./signup";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthUserStore } from "../store/AuthUserStore";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../config/theme";
import { SnackbarProvider } from "notistack";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Signin from "./signin";

function App() {

  return <HelmetProvider>
    <Helmet>
      <title>FastLabel</title>
      <link rel="shortcut icon" href="https://firebasestorage.googleapis.com/v0/b/labelly-29582.appspot.com/o/public%2Ffavicon.ico?alt=media" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Helmet>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>
        <Router>
          <AuthUserStore.Provider>
            <Route exact path="/" component={Signin}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/signin" component={Signin}></Route>
          </AuthUserStore.Provider>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  </HelmetProvider>
}
export default App;
