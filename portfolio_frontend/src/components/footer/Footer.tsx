import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { data } from "../topBar/data/topBarContent";
import styles from "./Footer.module.css";

export const Footer = () => {
  const curLocation = useLocation();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingY: 4,
        paddingX: 8,
      }}
    >
      <Typography fontSize={14}>Valeriano Di Domenico©</Typography>
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
    </Box>
  );
};
