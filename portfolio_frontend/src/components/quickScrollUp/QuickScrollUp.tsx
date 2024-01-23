import { Box } from "@mui/material";
import arrowUpIcon from "./data/arrowUpIcon.svg";
import styles from "./QuickScrollUp.module.css";
import { useState, useEffect } from "react";

export const QuickScrollUp = () => {
  const [isScrollArrowVisible, setSsScrollArrowVisible] = useState(false);

  useEffect(() => {
    setSsScrollArrowVisible(false);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollTop + clientHeight >= scrollHeight * 0.7) {
      // alert("ocwfwefew");
      if (!isScrollArrowVisible) {
        setSsScrollArrowVisible(true);
      }
    } else {
      if (isScrollArrowVisible) {
        setSsScrollArrowVisible(false);
      }
    }
  };
  window.addEventListener("scroll", handleScroll, true);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return isScrollArrowVisible ? (
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
  ) : null;
};
