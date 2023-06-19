import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import { MouseEvent, KeyboardEvent } from "react";
import styles from "./SideBar.module.css";
import { data } from "./data/sideBarContent";
import valeriano_profile_pic from "./data/valeriano_profile_pic.jpg";

interface SideBarProps {
  open: boolean;
  onClose: () => void;
}

const SideBar = ({ open, onClose }: SideBarProps) => {
  const toggleDrawer =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      onClose();
    };

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      <div role="presentation" className={styles.sideBarContainer}>
        <Box display="flex" flexDirection="column" gap={4}>
          <Typography
            variant="h4"
            textAlign="start"
            style={{ fontWeight: "bold" }}
          >
            Valeriano Di Domenico
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={valeriano_profile_pic}
              alt="valeriano de demenico"
              style={{ width: "24rem" }}
            />
          </div>
          <Typography variant="subtitle1" textAlign="start">
            "Hundert Gedanken schwirren mir durch den Kopf, wenn ich vor einer
            fotografischen Aufgabe stehe"
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography
              variant="h6"
              textAlign="start"
              style={{ fontWeight: "bold" }}
            >
              Contact
            </Typography>
            <Divider style={{ width: "2rem" }} />
            <Typography variant="subtitle2" textAlign="start">
              Phone: +41 78 604 02 05
            </Typography>
            <Typography variant="subtitle2" textAlign="start">
              Email: mail@valerianodidomenico.ch
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            position="fixed"
            bottom="4rem"
            gap={2}
          >
            {data.map((item, index) => (
              <Button
                key={index}
                className={styles.socialMediaButton}
                onClick={() => window.open(item.url, "_blank")}
              >
                <img src={item.icon} alt={item.alt} className={styles.icon} />
                <Typography className={styles.socialMediaText}>
                  {item.name}
                </Typography>
              </Button>
            ))}
          </Box>
        </Box>
      </div>
    </Drawer>
  );
};

export default SideBar;
