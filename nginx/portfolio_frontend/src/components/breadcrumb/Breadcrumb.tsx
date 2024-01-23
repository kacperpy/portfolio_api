import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import arrowDownIcon from "./data/arrow_down_icon.svg";
import { useIsMobileDevice } from "../../utils/useIsMobileDevice";

export const Breadcrumb = () => {
  const curLocation = useLocation();
  const { isMobileDevice } = useIsMobileDevice();

  function isBreadcrumbHidden() {
    return (
      curLocation.pathname.split("/")[1] === "" ||
      curLocation.pathname.split("/")[1] === "contact" ||
      curLocation.pathname.split("/")[1] === "about" ||
      curLocation.pathname.split("/")[1] === "shop" ||
      curLocation.pathname.split("/")[1] === "login" ||
      curLocation.pathname.split("/")[1] === "datenschutzerklarung" ||
      curLocation.pathname.split("/")[1] === "impressum"
    );
  }

  return isBreadcrumbHidden() ? null : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: isMobileDevice ? "6rem" : "12rem",
      }}
    >
      <Typography>{curLocation.pathname.split("/")[1]}</Typography>
      <img src={arrowDownIcon} alt="menu" style={{ width: "1.5rem" }}></img>
    </Box>
  );
};
