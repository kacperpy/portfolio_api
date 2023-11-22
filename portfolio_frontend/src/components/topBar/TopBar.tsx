import { Container, Grid, Typography } from "@mui/material";
import styles from "./TopBar.module.css";
import logo from "./data/logo_medium.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { data } from "./data/topBarContent";
import { useAuth } from "../../utils/useAuth";

export const TopBar = () => {
  const curLocation = useLocation();
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();

  window.addEventListener("storage", () => {
    updateUser();
  });

  return (
    <Container className={styles.topBarMenuContainer}>
      <img
        src={logo}
        alt="logo"
        onClick={() => navigate("/")}
        className={styles.logo}
      ></img>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        {data.map((item, index) => (
          <Typography key={index}>
            <Link
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
        <Typography>
          {user ? (
            <Link
              key={data.length + 1}
              to="/client"
              className={
                curLocation.pathname === "/client"
                  ? styles.linkTextActive
                  : styles.linkTextInactive
              }
            >
              {user}
            </Link>
          ) : (
            <Link
              key={data.length + 1}
              to="/login"
              className={
                curLocation.pathname === "/login"
                  ? styles.linkTextActive
                  : styles.linkTextInactive
              }
            >
              Login
            </Link>
          )}
        </Typography>
      </Grid>
    </Container>
  );
};
