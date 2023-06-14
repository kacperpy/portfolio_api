import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { MouseEvent, KeyboardEvent, FC } from "react";
import styles from "./SideBar.module.css";

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
        className={styles.sideBar}
      >
        <Box className={styles.sideBar} role="presentation">
          <Typography variant="h4">Valeriano Di Domenico</Typography>
          <hr />
          <Typography>
            Hundert Gedanken schwirren mir durch den Kopf, wenn ich vor einer
            fotografischen Aufgabe stehe
          </Typography>
          <List>
            {["instagram", "facebook", "twitter", "linkedIn"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </div>
    </Drawer>
  );
};

export default SideBar;
