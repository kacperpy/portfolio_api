import { createTheme } from "@mui/material";

export const createCustomTheme = () => {
  return createTheme({
    typography: {
      fontFamily: `"Lato"`,
      allVariants: {
        color: "black",
      },
    },
  });
};