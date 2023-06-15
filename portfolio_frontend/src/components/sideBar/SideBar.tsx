import { Button, Container, Drawer, Typography } from "@mui/material";
import { MouseEvent, KeyboardEvent, FC } from "react";
import styles from "./SideBar.module.css";
import { data } from "./data/sideBarContent";

interface SideBarProps {
  open: boolean;
  onClose: () => void;
}

const SideBar: FC<SideBarProps> = ({ open, onClose }) => {
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
      <div
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        className={styles.sideBarContainer}
      >
        <Container className={styles.sideBarContainer} role="presentation">
          <Typography variant="h4">Valeriano Di Domenico</Typography>
          <Typography variant="subtitle1">
            "Hundert Gedanken schwirren mir durch den Kopf, wenn ich vor einer
            fotografischen Aufgabe stehe"
          </Typography>
          <Container className={styles.socialMediaContainer}>
            {data.map((item, index) => (
              <Button key={index} className={styles.socialMediaButton}>
                <img src={item.icon} alt={item.alt} className={styles.icon} />
                <Typography className={styles.socialMediaText}>
                  {item.name}
                </Typography>
              </Button>
            ))}
          </Container>
        </Container>
      </div>
    </Drawer>
  );
};

export default SideBar;
