import { Container } from "@mui/material";
import searchIcon from "./search_icon.svg";
import styles from "./TopBar.module.css";

export const TopBar = () => {
  return (
    <Container className={styles.topBarContainer}>
      <img src={searchIcon} alt="search" className={styles.searchIcon}></img>
    </Container>
  );
};
