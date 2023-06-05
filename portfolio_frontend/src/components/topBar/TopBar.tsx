import { Container, Grid, Typography } from "@mui/material";
import styles from "./TopBar.module.css";
import logo from "./logo_medium.png";
import { Link, useLocation } from "react-router-dom";

export const TopBar = () => {
  const curLocation = useLocation();

  return (
    <Container className={styles.topBarMenuContainer}>
      <img src={logo} alt="logo" className={styles.logo}></img>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Typography>
          <Link
            to="/"
            className={
              curLocation.pathname === "/"
                ? styles.linkTextActive
                : styles.linkTextInactive
            }
          >
            Home
          </Link>
        </Typography>
        <Typography>
          <Link
            to="/portfolio"
            className={
              curLocation.pathname === "/portfolio"
                ? styles.linkTextActive
                : styles.linkTextInactive
            }
          >
            Portfolio
          </Link>
        </Typography>
        <Typography>
          <Link
            to="/"
            className={
              curLocation.pathname === "/??"
                ? styles.linkTextActive
                : styles.linkTextInactive
            }
          >
            Login
          </Link>
        </Typography>
        <Typography>
          <Link
            to="/"
            className={
              curLocation.pathname === "/???"
                ? styles.linkTextActive
                : styles.linkTextInactive
            }
          >
            Contacts
          </Link>
        </Typography>
      </Grid>
    </Container>
  );
};
