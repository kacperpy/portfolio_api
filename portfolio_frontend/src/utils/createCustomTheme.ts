import { createTheme } from "@mui/material";

export const createCustomTheme = () => {
  return createTheme({
    typography: {
      fontFamily: `"Lato"`,
      fontWeightRegular: "lighter",
      fontWeightBold: "bold",
      allVariants: {
        color: "black",
      },
    },
  });
};
