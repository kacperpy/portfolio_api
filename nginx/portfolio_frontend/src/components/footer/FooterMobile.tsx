import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { data } from "../topBar/data/topBarContent";
import styles from "./Footer.module.css";

export const FooterMobile = () => {
  const curLocation = useLocation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingY: 2,
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <Typography fontSize={14}>
          <Link
            key={data.length + 1}
            to="/datenschutzerklarung"
            className={
              curLocation.pathname === "/datenschutzerklarung"
                ? styles.linkTextActive
                : styles.linkTextInactive
            }
          >
            Datenschutzerklärung
          </Link>
        </Typography>
        <Typography fontSize={14}>
          <Link
            key={data.length + 1}
            to="/impressum"
            className={
              curLocation.pathname === "/impressum"
                ? styles.linkTextActive
                : styles.linkTextInactive
            }
          >
            Impressum
          </Link>
        </Typography>
      </Box>
      <Typography fontSize={14}>Valeriano Di Domenico©</Typography>
    </Box>
  );
};
