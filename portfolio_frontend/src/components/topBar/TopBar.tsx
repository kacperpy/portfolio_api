import { Container, Grid, Typography } from "@mui/material";
import styles from "./TopBar.module.css";
import logo from "./logo_medium.png";
import menu_icon from "./menu_icon.svg";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import SideBar from "../sideBar/SideBar";

export const TopBar = () => {
  const curLocation = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <Container className={styles.topBarMenuContainer}>
      <img
        src={menu_icon}
        alt="menu"
        onClick={() => setOpen(true)}
        className={styles.menu}
      ></img>
      <SideBar open={open} onClose={() => setOpen(false)} />
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
