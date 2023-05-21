import { Container, Typography } from "@mui/material";
import logo from "./logo_medium.png";
import menuIcon from "./menu_icon.svg";
import styles from "./SideBar.module.css";

export const SideBar = () => {
  return (
    <Container className={styles.sideBarContainer}>
      <img src={logo} alt="logo" className={styles.logo}></img>
      <img src={menuIcon} alt="menu" className={styles.menuIcon}></img>
      <Container className={styles.pagesContainer}>
        <Typography>Home</Typography>
        <Typography>Portfolio</Typography>
        <Typography>Login</Typography>
        <Typography>Contacts</Typography>
      </Container>
    </Container>
  );
};
