import { Container, Typography } from "@mui/material";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <Container className={styles.homePageContainer}>
      <Typography>Home Page</Typography>
    </Container>
  );
};
