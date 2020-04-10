import React, { useEffect, useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { HEADER_HEIGHT } from "../../const/StyleConst";


type StyleProps = {
  windowHight: number;
};

const useStyles = makeStyles(() =>
  createStyles({
    root: (styleProps: StyleProps) => ({
      width: "100%",
      height: styleProps.windowHight - HEADER_HEIGHT
    })
  })
);

export default function Loading() {
  const [windowHight, setWindowHeight] = useState(0);
  const styleProps: StyleProps = { windowHight: windowHight };
  const classes = useStyles(styleProps);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  });

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
}
