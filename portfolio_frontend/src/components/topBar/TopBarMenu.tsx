import { Container, Grid, Typography } from "@mui/material";
import styles from "./TopBarMenu.module.css";
import logo from "./logo_medium.png";
import { Link, useLocation } from "react-router-dom";

export const TopBarMenu = () => {
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
        <Typography>Login</Typography>
        <Typography>Contacts</Typography>
      </Grid>
    </Container>
  );
};
