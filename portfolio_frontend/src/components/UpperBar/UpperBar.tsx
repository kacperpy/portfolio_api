import { Container, Typography } from "@mui/material";
import logo from "./Logo.png";

export const UpperBar = () => {
  return (
    <Container>
      <img src={logo} alt="logo"></img>
      <Typography>Upper Bar</Typography>
    </Container>
  );
};
