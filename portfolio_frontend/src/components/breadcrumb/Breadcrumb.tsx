import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import arrowDownIcon from "./data/arrow_down_icon.svg";
import { useIsMobileDevice } from "../../utils/useIsMobileDevice";

export const Breadcrumb = () => {
  const curLocation = useLocation();
  const { isMobileDevice } = useIsMobileDevice();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: isMobileDevice ? "6rem" : "12rem",
      }}
    >
      <Typography>
        {curLocation.pathname.split("/")[1] === ""
          ? "home"
          : curLocation.pathname.split("/")[1]}
      </Typography>
      <img src={arrowDownIcon} alt="menu" style={{ width: "1.5rem" }}></img>
    </Box>
  );
};
