import { Box } from "@mui/material";
import arrowUpIcon from "./data/arrowUpIcon.svg";
import styles from "./QuickScrollUp.module.css";

export const QuickScrollUp = () => {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        margin: 2,
        alignItems: "center",
      }}
    >
      <img
        src={arrowUpIcon}
        alt="scroll arrow"
        onClick={handleScrollUp}
        className={styles.arrow}
      ></img>
    </Box>
  );
};
