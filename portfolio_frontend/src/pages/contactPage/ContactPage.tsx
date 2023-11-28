import { Box, Divider, Typography } from "@mui/material";
import locationIcon from "./data/location_icon.svg";
import phoneIcon from "./data/phone_icon.svg";
import mailIcon from "./data/mail_icon.svg";
import { useIsMobileDevice } from "../../utils/useIsMobileDevice";

export const ContactPage = () => {
  const { isMobileDevice } = useIsMobileDevice();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        gap: 8,
      }}
    >
      <Typography variant="h5">Contact me</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobileDevice ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: isMobileDevice ? "start" : "end",
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <img src={phoneIcon} alt="phone" style={{ height: "2rem" }}></img>
            <Typography variant="body1">(+41) 786 040 205</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <img src={mailIcon} alt="mail" style={{ height: "2rem" }}></img>
            <Typography variant="body1">mail@valerianodidomenico.ch</Typography>
          </Box>
        </Box>
        <Divider
          orientation={isMobileDevice ? "horizontal" : "vertical"}
          flexItem
        />
        {isMobileDevice ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <img
              src={locationIcon}
              alt="location"
              style={{ height: "2rem" }}
            ></img>
            <Typography variant="body1">
              Künzlistrasse 25, 8057 Zürich
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography variant="body1">
              Künzlistrasse 25, 8057 Zürich
            </Typography>
            <img
              src={locationIcon}
              alt="location"
              style={{ height: "2rem" }}
            ></img>
          </Box>
        )}
      </Box>
    </Box>
  );
};
