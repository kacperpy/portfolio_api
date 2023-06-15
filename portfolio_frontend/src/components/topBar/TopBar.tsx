import { Container, Grid, Typography } from "@mui/material";
import styles from "./TopBar.module.css";
import logo from "./data/logo_medium.png";
import menu_icon from "./data/menu_icon.svg";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import SideBar from "../sideBar/SideBar";
import { data } from "./data/topBarContent";

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
        {data.map((item, index) => (
          <Typography>
            <Link
              key={index}
              to={item.url}
              className={
                curLocation.pathname === item.url
                  ? styles.linkTextActive
                  : styles.linkTextInactive
              }
            >
              {item.name}
            </Link>
          </Typography>
        ))}
      </Grid>
    </Container>
  );
};
