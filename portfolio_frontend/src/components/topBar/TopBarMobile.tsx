import { Box } from "@mui/system";
import styles from "./TopBar.module.css";
import logo from "./data/logo_medium.png";
import menuIcon from "./data/menu_icon.svg";
import closeIcon from "./data/close_icon.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Drawer, Typography } from "@mui/material";
import { data } from "./data/topBarContent";
import { useAuth } from "../../utils/useAuth";
import { useState } from "react";
import { useIsMobileDevice } from "../../utils/useIsMobileDevice";

export const TopBarMobile = () => {
  const navigate = useNavigate();
  const curLocation = useLocation();
  const { user, updateUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMobileDevice } = useIsMobileDevice();

  window.addEventListener("storage", () => {
    updateUser();
  });

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 2,
      }}
    >
      <img
        src={logo}
        alt="logo"
        onClick={() => navigate("/")}
        className={styles.logo}
      ></img>
      <img
        src={menuIcon}
        alt="menu"
        onClick={() => setMenuOpen(true)}
        className={styles.menu}
      ></img>
      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box
          role="presentation"
          sx={{
            width: isMobileDevice ? "14rem" : "28rem",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: isMobileDevice ? "center" : "top",
            alignItems: "center",
            gap: 1,
            backgroundColor: "whitesmoke",
          }}
        >
          <img
            src={closeIcon}
            alt="close"
            onClick={() => setMenuOpen(false)}
            className={isMobileDevice ? styles.close : styles.closeDesktop}
          ></img>
          {data.map((item, index) => (
            <Typography key={index}>
              {" "}
              <Link
                onClick={() => setMenuOpen(false)}
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
          <Typography sx={{ paddingTop: "1rem" }}>
            {user ? (
              <Link
                onClick={() => setMenuOpen(false)}
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
                onClick={() => setMenuOpen(false)}
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
        </Box>
      </Drawer>
    </Box>
  );
};
