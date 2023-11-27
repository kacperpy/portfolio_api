import { Box, Container, Typography } from "@mui/material";
import styles from "./PortfolioPage.module.css";
import ReactPlayer from "react-player";

export const PortfolioPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <ReactPlayer url={"https://vimeo.com/888695664?share=copy"} controls />
    </Box>
  );
};
