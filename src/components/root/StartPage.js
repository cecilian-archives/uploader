import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ListIcon from "@material-ui/icons/ListAlt";
import ImageIcon from "@material-ui/icons/Image";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const styles = theme => ({
  link: {
    textDecoration: "none",
  },
  button: {
    margin: theme.spacing.unit,
    textTransform: "none",
    fontWeight: "bold",
    width: "100%",
  },
  itemSpaceTop: {
    marginTop: 2 * theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  itemSpaceBottom: {
    marginTop: theme.spacing.unit,
    marginBottom: 2 * theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const StartPage = ({ classes }) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={10} sm={8} md={6} className={classes.itemSpaceTop}>
          <Typography variant="h4">
            Welcome to the Cecilian Archive Uploader
          </Typography>
          <Typography variant="body1">
            Select which type of archive document you would like to upload:
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid
          item
          xs={10}
          sm={8}
          md={6}
          lg={4}
          className={classes.itemSpaceTop}
        >
          <Link to="/minutes" className={classes.link}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.button}
            >
              <ListIcon className={classes.leftIcon} />
              Upload Minutes
              <ChevronRightIcon className={classes.rightIcon} />
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid
          item
          xs={10}
          sm={8}
          md={6}
          lg={4}
          className={classes.itemSpaceBottom}
        >
          <Link to="/photos" className={classes.link}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.button}
            >
              <ImageIcon className={classes.leftIcon} />
              Upload Photos
              <ChevronRightIcon className={classes.rightIcon} />
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(StartPage);
