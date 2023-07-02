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
    palette: {
      primary: {
        main: "#000000", // Set the primary color to black
      },
    },
  });
};
