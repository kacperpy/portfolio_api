import { Box, Button, Typography } from "@mui/material";
import { useAuth } from "../../utils/useAuth";

export const ClientPage = () => {
  const { user, updateUser } = useAuth();

  window.addEventListener("storage", () => {
    updateUser();
  });
  const handleLogout = () => {
    localStorage.removeItem("portfolio_authed_user");
    localStorage.removeItem("portfolio_user_auth_token");
    window.dispatchEvent(new Event("storage"));
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="70vh"
      gap="2rem"
    >
      <Typography>Client Page</Typography>
      <Button
        variant="outlined"
        onClick={handleLogout}
        disabled={user === null}
      >
        log out
      </Button>
    </Box>
  );
};
